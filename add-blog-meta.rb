# Adds the OpenGraph & Twitter meta tags to the blog articles
require "fileutils"

puts ">>> Adding meta-data to blog posts"

Dir.glob("blog/*.md").each { |file|
    next if file =~ /index\.md/
    in_frontmatter = false
    frontmatter_processed = false
    og_title = 'openHAB'
    og_description = 'a vendor and technology agnostic open source automation software for your home'
    og_image = nil

    FileUtils.mkdir_p('.vuepress/tmp')
    FileUtils.mv(file, ".vuepress/tmp/#{File.basename(file)}")

    puts " -> #{file}"
    File.open(file, 'w+') { |out|
        File.open(".vuepress/tmp/#{File.basename(file)}").each { |line|

            if in_frontmatter && line =~ /^title:/ then
                og_title = line.gsub('title: ', '').gsub("\n", "")
            end
            if in_frontmatter && line =~ /^excerpt:/ then
                og_description = line.gsub('excerpt: ', '').gsub("\n", "").gsub('[', '').gsub(']', '').gsub(/\(http[:\/\-0-9A-Za-z\.]+\)/, '')
            end
            if in_frontmatter && line =~ /^previewimage:/ then
                og_image = line.gsub('previewimage: ', '').gsub("\n", "")
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
                    
                    in_frontmatter = false
                    frontmatter_processed = true
                end
            end

            out.puts line
        }
    }
}