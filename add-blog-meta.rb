# Adds the OpenGraph & Twitter meta tags to the blog articles
require "fileutils"

puts "➡️ Adding meta-data to blog posts"

Dir.glob("blog/*.md").each { |file|
    next if file =~ /index\.md/
    in_frontmatter = false
    frontmatter_processed = false
    parsing_multiline_excerpt = false
    og_title = 'openHAB'
    og_description = 'a vendor and technology agnostic open source automation software for your home'
    og_image = nil

    #Feed Meta
    fm_author = nil

    FileUtils.mkdir_p('.vuepress/tmp')
    FileUtils.mv(file, ".vuepress/tmp/#{File.basename(file)}")

    puts " ➡️ #{file}"
    File.open(file, 'w+') { |out|
        File.open(".vuepress/tmp/#{File.basename(file)}").each { |line|

            # FIXME: require "yaml" and parse properly one day...
            if parsing_multiline_excerpt then
                if line =~ /^  / then
                    og_description += ' ' + line.gsub(/^  /, '').gsub("\n", "")
                    next
                else
                    og_description.strip!
                    parsing_multiline_excerpt = false
                end
            end

            if in_frontmatter && line =~ /^title:/ then
                og_title = line.gsub('title: ', '').gsub("\n", "")
            end

            if in_frontmatter && line =~ /^excerpt:/ then
                og_description = line.gsub('excerpt: ', '').gsub("\n", "").gsub('[', '').gsub(']', '').gsub(/\(http[:\/\-0-9A-Za-z\.]+\)/, '')
                if og_description == ">-" then
                    og_description = ''
                    parsing_multiline_excerpt = true
                    next
                end
            end

            if in_frontmatter && line =~ /^previewimage:/ then
                og_image = line.gsub('previewimage: ', '').gsub("\n", "")
            end

            if in_frontmatter && line =~ /^author:/ then
                fm_author = line.gsub('author: ', '').gsub("\n", "")
            end

            if line =~ /^---$/ then
                if !in_frontmatter then
                    in_frontmatter = true
                else
                    # Add OpenGraph tags
                    out.puts "meta:"
                    out.puts "  - name: twitter:card"
                    out.puts "    content: summary_large_image"
                    out.puts "  - property: og:title"
                    out.puts "    content: \"#{og_title.gsub('"', '\"')}\""
                    out.puts "  - property: og:description"
                    out.puts "    content: #{og_description}"
                    out.puts "  - property: og:image" if og_image
                    out.puts "    content: https://www.openhab.org#{og_image}" if og_image

                    # Add feed meta tags, when something relevant is available
                    if fm_author != nil || og_image != nil

                        out.puts "feed:"
                        out.puts "  image: https://www.openhab.org#{og_image}" if og_image
                        out.puts "  author:"
                        out.puts "    - "
                        out.puts "      name: #{fm_author}"
                    end
                    
                    in_frontmatter = false
                    frontmatter_processed = true
                end
            end

            out.puts line
        }
    }
}