# This will clone https://github.com/openhab/openhab-docs
# and migrate content into the website with some changes

require "fileutils"
require "net/http"
require "uri"
require "rexml/document"
# require "nokogiri"

$docs_repo = "https://github.com/openhab/openhab-docs"
$docs_repo_root = $docs_repo + "/blob/gh-pages"
$esh_repo = "https://github.com/eclipse/smarthome"
$esh_repo_root = $esh_repo + "/blob/master/docs/documentation"

if (ARGV[0] && ARGV[0] == "--no-clone" && Dir.exists?(".vuepress/openhab-docs")) then
    puts ">>> Re-using existing clone"
else
    puts ">>> Deleting .vuepress/openhab-docs if existing..."
    FileUtils.rm_rf(".vuepress/openhab-docs")

    puts ">>> Cloning openhab-docs"
    `git clone --depth 1 https://github.com/openhab/openhab-docs .vuepress/openhab-docs`
end

$esh_features = []
puts ">>> Download ESH addons feature file"
# $features = Nokogiri::XML(Net::HTTP.get(URI.parse('https://raw.githubusercontent.com/openhab/openhab-distro/master/features/addons-esh/src/main/feature/feature.xml')))
# $features.remove_namespaces!
$features = REXML::Document.new(Net::HTTP.get(URI.parse('https://raw.githubusercontent.com/openhab/openhab-distro/master/features/addons-esh/src/main/feature/feature.xml')))
REXML::XPath.each($features, "//feature/feature") { |f|
    feature = f.text
    if (feature =~ /esh-/) then
        puts " -> Adding #{feature} as ESH feature"
        $esh_features.push(feature)
    end
}

def process_file(indir, file, outdir, source)
    in_frontmatter = false
    frontmatter_processed = false
    has_source = false
    has_logo = false
    FileUtils.mkdir_p(outdir)
    File.open("#{outdir}/#{file}", "w+") { |out|
        File.open("#{indir}/#{file}").each { |line|
            next if line =~ /^layout: documentation/
            next if line =~ /^layout: tutorial/
            next if line =~ /^layout: developers/
            next if line =~ /^layout: intro/
            next if line =~ /^{% include base.html %}/
            next if line =~ /\{: #/
            next if line =~ /\{::options/
            next if line =~ /TOC/
            next if line =~ /no_toc/
            has_source = true if in_frontmatter && line =~ /^source:/
            has_logo = true if in_frontmatter && line =~ /^logo:/

            if line =~ /^---$/ then
                if !in_frontmatter then
                    in_frontmatter = true
                elsif !frontmatter_processed
                    if !has_source && source then
                        # Prefer already present source
                        out.puts "source: #{source}"
                    elsif !has_source
                        # Try to determine the source
                        outdir_parts = outdir.split('/')
                        outdir_parts[1] = "binding" if outdir_parts[1] == "bindings"
                        outdir_parts[1] = "transform" if outdir_parts[1] == "transformations"
                        outdir_parts[1] = "io" if outdir_parts[1] == "integrations"
                        if (outdir_parts[0] == "addons") then
                            addon_type = outdir_parts[1]
                            addon = file.split('/')[0]
                            source = ""
                            if addon == "habmin" then
                                puts "    (add-on is habmin)"
                                source = "https://github.com/openhab/org.openhab.ui.habmin/blob/master/README.md"
                            elsif addon == "habpanel" then
                                puts "    (add-on is habpanel)"
                                source = "https://github.com/openhab/org.openhab.ui.habpanel/blob/master/README.md"
                            elsif addon == "zigbee" then
                                puts "    (add-on is zigbee)"
                                source = "https://github.com/openhab/org.openhab.binding.zigbee/blob/master/org.openhab.binding.zigbee/README.md"
                            elsif addon == "zwave" then
                                puts "    (add-on is zwave)"
                                source = "https://github.com/openhab/org.openhab.binding.zwave/blob/master/README.md"
                            elsif $esh_features.include?("esh-#{addon_type}-#{addon.gsub('.', '-')}") then
                                puts "    (add-on is from ESH)"
                                source = "https://github.com/eclipse/smarthome/blob/master/extensions/#{addon_type}/org.eclipse.smarthome.#{addon_type}.#{addon}/README.md"
                            else
                                puts "    (add-on is from openhab2-addons)"
                                source = "https://github.com/openhab/openhab2-addons/blob/master/addons/#{addon_type}/org.openhab.#{addon_type}.#{addon}/README.md"
                            end

                            out.puts "source: #{source}"
                        end
                    end

                    in_frontmatter = false
                    frontmatter_processed = true
                end
            end

            # Replace the Jekyll "contribution wanted" include file by custom VuePress markup
            line = "[[toc]]" if line =~ /\{:toc/
            if line =~ /\{% include contribution-wanted.html %\}/
                out.puts "::: tip Contribution Wanted"
                out.puts "Please help us improve the documentation! "
                out.puts "If you'd like to leave corrections, additions or comments for this article or any other part of this website, please drop a word at:"
                out.puts "[Documentation Issue Tracker](#{$docs_repo}/issues)"
                out.puts ":::"
                next
            end

            # Insert the logo component below the first title for add-ons which have a logo reference in their front matter
            if !in_frontmatter && line =~ /^# / && has_logo then
                out.puts line
                out.puts
                out.puts '<AddonLogo/>'
                has_logo = false
                next
            end

            # Actions and transformations are currently partly in add-ons, copy the content above the list of add-ons
            break if line =~ /^More details regarding this and other Transformation services can be found in the individual transformation articles linked below./
            break if line =~ /^## Installable Actions/

            # Remove collapsibles in Linux install document and replace them by regular headings
            next if line =~ /include collapsible/ && file =~ /linux/
            line = "##### " + line if line =~ /^Apt Based Systems/ && file =~ /linux/
            line = "##### " + line if line =~ /^Yum or Dnf Based Systems/ && file =~ /linux/
            line = "##### " + line if line =~ /^Systems based on/ && file =~ /linux/

            # Fix headers for the basic/classic UI pages
            line = line.gsub(/^##/, "#") if outdir == "docs/configuration/ui" && (file =~ /basic/ || file =~ /classic/)

            # Fix broken links in the package selection article
            if outdir == 'docs/configuration' && file =~ /packages/ then
                line = line.gsub('(../addons/uis/paper/readme.html)', '(paperui.html)')
                line = line.gsub('(../addons/uis/basic/readme.html)', '(ui/basic/)')
                line = line.gsub('(../addons/uis/classic/readme.html)', '(ui/classic/)')
                line = line.gsub('(../addons/uis/habmin/readme.html)', '(ui/habmin/)')
                line = line.gsub('(../addons/uis/habpanel/readme.html)', '(habpanel.html)')
            end

            # Misc replaces (relative links, remove placeholder interpreted as custom tags)
            line = line.gsub('http://docs.openhab.org/addons/uis/paper/readme.html', '/docs/configuration/paperui.html')
            line = line.gsub('http://docs.openhab.org/addons/uis/habpanel/readme.html', '/docs/configuration/habpanel.html')
            line = line.gsub('http://docs.openhab.org/addons/uis/habmin/readme.html', '/docs/configuration/habmin.html')
            line = line.gsub('http://docs.openhab.org/addons/uis/basic/readme.html', '/docs/configuration/ui/basic/')
            line = line.gsub(/http:\/\/docs\.openhab\.org\/addons\/(.*)\/(.*)\/readme\.html/, '/addons/\1/\2/')
            line = line.gsub('http://docs.openhab.org/', '/docs/')
            line = line.gsub('/addons/io/', '/addons/integrations/')
            line = line.gsub("{{base}}/", "./docs/")
            line = line.gsub("(images/", "(./images/")
            line = line.gsub("src=\"images/", "src=\"./images/")
            line = line.gsub("]:images/", "]:./images/")
            line = line.gsub("](doc/", "](./doc/")
            line = line.gsub("(diagrams/", "(./diagrams/")
            line = line.gsub("./docs/tutorials/beginner/", "/docs/tutorial/")
            line = line.gsub("./docs/", "/docs/")
            line = line.gsub("<activeState>", '\<activeState\>')
            line = line.gsub("<passiveState>", '\<passiveState\>')
            line = line.gsub("<dimension>", '\<dimension\>')
            line = line.gsub("<TransformProgram>", '\<TransformProgram\>')
            line = line.gsub("<version>", '&lt;version&gt;') if file =~ /caldav/
            line = line.gsub("by <step>", 'by `<step>`') if file =~ /ipx8001/
            line = line.gsub("<BR>", '<BR/>')
            line = line.gsub("'<package name>:<widget ID>'", '`<package name>:<widget ID>`') if file =~ /lametrictime/
            line = line.gsub("<mac address of bridge>", '`<mac address of bridge>`') if file =~ /milight/
            line = line.gsub("<mac>", '`<mac>`') if file =~ /milight/
            line = line.gsub("<type of bulb>", '`<type of bulb>`') if file =~ /milight/
            line = line.gsub("<IP-Address of bridge>", '`<IP-Address of bridge>`') if file =~ /milight/
            line = line.gsub("<bulb>", '`<bulb>`') if file =~ /milight/
            line = line.gsub("<zone>", '`<zone>`') if file =~ /milight/
            line = line.gsub("<n>", '&lt;n&gt;') if file =~ /rfxcom/
            line = line.gsub(" <value> ", ' &lt;value&gt; ') if file =~ /zibase/
            line = line.gsub("<username>", '&lt;username&gt;') if file =~ /zoneminder/
            line = line.gsub("<password>", '&lt;password&gt;') if file =~ /zoneminder/
            line = line.gsub("<yourzmip>", '&lt;yourzmip&gt;') if file =~ /zoneminder/
            line = line.gsub("<regular expression>", '\<regular expression\>')
            line = line.gsub('src="images/', 'src="./images/') if outdir =~ /apps/

            line = line.gsub(/\{:(style|target).*\}/, '') # Jekyll inline attributes syntax not supported

            out.puts line
        }

        # Add the components for the versions dropdown and the edit link
        out.puts
        out.puts '<DocPreviousVersions/>'
        out.puts '<EditPageLink/>'
    }
end

puts ">>> Migrating common images"
FileUtils.mkdir_p("docs/images")
FileUtils.cp_r(".vuepress/openhab-docs/images/distro.png", "docs/images")
FileUtils.cp_r(".vuepress/openhab-docs/images/dashboard.png", "docs/images")


puts ">>> Migrating the Concepts section"


Dir.glob(".vuepress/openhab-docs/concepts/*.md").each { |path|
    file = File.basename(path)
    next if file == "categories.md"
    next if file == "units-of-measurement.md"
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/concepts", file, "docs/concepts", "#{$esh_repo_root}/concepts/#{file}")
}
puts " -> images and diagrams"
FileUtils.cp_r(".vuepress/openhab-docs/concepts/images", "docs/concepts/images")
FileUtils.cp_r(".vuepress/openhab-docs/concepts/diagrams", "docs/concepts/diagrams")



puts ">>> Migrating the Installation section"


Dir.glob(".vuepress/openhab-docs/installation/*.md") { |path|
    file = File.basename(path)
    next if file == "designer.md"
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/installation", file, "docs/installation", "#{$docs_repo_root}/installation/#{file}")
}
puts " -> images"
FileUtils.cp_r(".vuepress/openhab-docs/installation/images", "docs/installation/images")



puts ">>> Migrating the Tutorial section"


Dir.glob(".vuepress/openhab-docs/tutorials/beginner/*.md") { |path|
    file = File.basename(path)
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/tutorials/beginner", file, "docs/tutorial", "#{$docs_repo_root}/tutorials/beginner/#{file}")
}
puts " -> images"
FileUtils.cp_r(".vuepress/openhab-docs/tutorials/beginner/images", "docs/tutorial/images")
# FileUtils.cp_r(".vuepress/openhab-docs/tutorials/images/*", "docs/tutorial/images")



puts ">>> Migrating the Configuration section"


Dir.glob(".vuepress/openhab-docs/configuration/*.md") { |path|
    file = File.basename(path)
    next if file == "transform.md" # Useless, copy the one from addons
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/configuration", file, "docs/configuration", "#{$docs_repo_root}/configuration/#{file}")
}
puts " -> images"
FileUtils.cp_r(".vuepress/openhab-docs/configuration/images", "docs/configuration")
process_file(".vuepress/openhab-docs/addons", "actions.md", "docs/configuration", "#{$docs_repo_root}/addons/actions.md")
process_file(".vuepress/openhab-docs/addons", "transformations.md", "docs/configuration", "#{$docs_repo_root}/addons/transformations.md")
process_file(".vuepress/openhab-docs/tutorials", "migration.md", "docs/configuration/migration", "#{$docs_repo_root}/tutorials/migration.md")
FileUtils.mv("docs/configuration/migration/migration.md", "docs/configuration/migration/index.md")
FileUtils.cp_r(".vuepress/openhab-docs/tutorials/images", "docs/configuration/migration")



puts ">>> Migrating the UI section"


Dir.glob(".vuepress/openhab-docs/_addons_uis/**") { |path|
    next if path =~ /habpanel/ || path =~ /paper/ # Those already have their own article, no need to include the readme...
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("docs/configuration/ui/" + addon)
    process_file(".vuepress/openhab-docs/_addons_uis", addon + "/readme.md", "docs/configuration/ui", "")
    puts " -> images (#{addon})"
    FileUtils.cp_r(".vuepress/openhab-docs/_addons_uis/#{addon}/doc", "docs/configuration/ui/#{addon}")
}



puts ">>> Migrating the Apps section"


Dir.glob(".vuepress/openhab-docs/addons/uis/apps/*.md") { |path|
    file = File.basename(path)
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/addons/uis/apps", file, "docs/apps", "#{$docs_repo_root}/addons/uis/apps/#{file}")
}
puts " -> images"
FileUtils.cp_r(".vuepress/openhab-docs/addons/uis/apps/images", "docs/apps")



puts ">>> Migrating the Administration section"


Dir.glob(".vuepress/openhab-docs/administration/*.md") { |path|
    file = File.basename(path)
    puts " -> #{file}"
    process_file(".vuepress/openhab-docs/administration", file, "docs/administration", "#{$docs_repo_root}/administration/#{file}")
}



puts ">>> Migrating the Developer section"


process_file(".vuepress/openhab-docs/developers", "index.md", "docs/developer", "#{$docs_repo_root}/developer/index.md")
["prerequisites", "development", "contributing"].each { |subsection|
    Dir.glob(".vuepress/openhab-docs/developers/#{subsection}/*.md") { |path|
        file = File.basename(path)
        puts " -> #{subsection}/#{file}"
        process_file(".vuepress/openhab-docs/developers/#{subsection}", file, "docs/developer/#{subsection}", "#{$docs_repo_root}/developer/#{subsection}/#{file}")
    }
    if subsection != "contributing" then
        puts " -> #{subsection}/images"
        FileUtils.cp_r(".vuepress/openhab-docs/developers/#{subsection}/images", "docs/developer/#{subsection}")
    end
}




### ADDONS




puts ">>> Migrating add-ons: Actions"


Dir.glob(".vuepress/openhab-docs/_addons_actions/**") { |path|
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/actions/" + addon)
    process_file(".vuepress/openhab-docs/_addons_actions", addon + "/readme.md", "addons/actions", nil)
}



puts ">>> Migrating add-ons: Persistence"


Dir.glob(".vuepress/openhab-docs/_addons_persistences/**") { |path|
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/persistence/" + addon)
    process_file(".vuepress/openhab-docs/_addons_persistences", addon + "/readme.md", "addons/persistence", nil)
}



puts ">>> Migrating add-ons: Transformations"


Dir.glob(".vuepress/openhab-docs/_addons_transformations/**") { |path|
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/transformations/" + addon)
    process_file(".vuepress/openhab-docs/_addons_transformations", addon + "/readme.md", "addons/transformations", nil)
}



puts ">>> Migrating add-ons: Voice"


Dir.glob(".vuepress/openhab-docs/_addons_voices/**") { |path|
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/voice/" + addon)
    process_file(".vuepress/openhab-docs/_addons_voices", addon + "/readme.md", "addons/voice", nil)
}



puts ">>> Migrating add-ons: IO"


Dir.glob(".vuepress/openhab-docs/_addons_ios/**") { |path|
    # See below for the Alexa & Mycroft special cases
    next if path =~ /alexa-skill/
    next if path =~ /mycroft-skill/
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/integrations/" + addon)
    process_file(".vuepress/openhab-docs/_addons_ios", addon + "/readme.md", "addons/integrations", nil)
    if (Dir.exists?(".vuepress/openhab-docs/_addons_ios/#{addon}/doc")) then
        puts "  \\-> images"
        FileUtils.cp_r(".vuepress/openhab-docs/_addons_ios/#{addon}/doc", "addons/integrations/#{addon}")
    end
}

# Handle those two separately - copy them in the "ecosystem" section
FileUtils.mkdir_p("docs/ecosystem/alexa")
FileUtils.mkdir_p("docs/ecosystem/mycroft")
process_file(".vuepress/openhab-docs/_addons_ios/alexa-skill", "readme.md", "docs/ecosystem/alexa", "https://github.com/openhab/openhab-alexa/blob/master/USAGE.md")
process_file(".vuepress/openhab-docs/_addons_ios/mycroft-skill", "readme.md", "docs/ecosystem/mycroft", "https://github.com/openhab/openhab-mycroft/blob/master/USAGE.md")



puts ">>> Migrating add-ons: Bindings"


Dir.glob(".vuepress/openhab-docs/_addons_bindings/**") { |path|
    addon = File.basename(path)
    puts " -> #{addon}"
    FileUtils.mkdir_p("addons/bindings/" + addon)
    process_file(".vuepress/openhab-docs/_addons_bindings", addon + "/readme.md", "addons/bindings", nil)
    if (Dir.exists?(".vuepress/openhab-docs/_addons_bindings/#{addon}/doc") && addon != "zwave") then
        puts "  \\-> images"
        FileUtils.cp_r(".vuepress/openhab-docs/_addons_bindings/#{addon}/doc", "addons/bindings/#{addon}")
    end
}



# Write arrays of addons by type to include in VuePress config.js
puts ">>> Writing add-ons arrays to files for sidebar navigation"
["bindings", "persistence", "actions", "integrations", "transformations", "voice"].each { |type|
    File.open(".vuepress/addons-#{type}.js", "w+") { |file|
        file.puts "module.exports = ["

        Dir.foreach('addons/' + type) { |dir|
            if dir != "." && dir != ".." && dir != "list.txt" then
                # puts dir

                File.readlines('addons/' + type + '/' + dir + '/readme.md').each { |line|
                    if line =~ /^label:/ then
                        title = line.gsub("label: ", "").gsub("\n", "")
                        title += ' (1.x)' if dir =~ /1$/ && !(title =~ /1\.x/)
                        file.puts "\t['#{type}/#{dir}/', '#{title}'],"
                    end
                }
            end
        }

        file.puts "]"
    }
}


# Regenerate the classic iconset docs
puts ">>> Generating iconset"
system("ruby generate_iconset_doc.rb .vuepress/openhab-docs/_addons_iconsets classic .vuepress/openhab-docs/_data docs/configuration/iconsets")
