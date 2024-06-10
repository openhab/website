# frozen_string_literal: true

# Adds the OpenGraph & Twitter meta tags to the blog articles
require "fileutils"

puts "➡️ Adding meta-data to blog posts"

Dir.glob("blog/*.md") do |file|
  next if file =~ /index\.md/

  in_frontmatter = false
  parsing_multiline_excerpt = false
  og_title = "openHAB"
  og_description = "a vendor and technology agnostic open source automation software for your home"
  og_image = nil

  # Feed Meta
  fm_author = nil

  FileUtils.mkdir_p(".vuepress/tmp")
  FileUtils.mv(file, ".vuepress/tmp/#{File.basename(file)}")

  puts "   ➡️ #{file}"
  File.open(file, "w+") do |out|
    File.open(".vuepress/tmp/#{File.basename(file)}").each do |line|
      # FIXME: require "yaml" and parse properly one day...
      if parsing_multiline_excerpt
        if line =~ /^  /
          og_description += " "
          og_description += line.gsub(/^  /, "").gsub("\n", "")
          next
        else
          og_description.strip!
          parsing_multiline_excerpt = false
        end
      end

      og_title = line.gsub("title: ", "").gsub("\n", "") if in_frontmatter && line =~ /^title:/

      if in_frontmatter && line =~ /^excerpt:/
        og_description = line.gsub("excerpt: ", "").gsub("\n", "").gsub("[", "").gsub("]", "").gsub(%r{\(http[:/\-0-9A-Za-z\.]+\)}, "")
        if og_description == ">-"
          og_description = ""
          parsing_multiline_excerpt = true
          next
        end
      end

      og_image = line.gsub("previewimage: ", "").gsub("\n", "") if in_frontmatter && line =~ /^previewimage:/

      fm_author = line.gsub("author: ", "").gsub("\n", "") if in_frontmatter && line =~ /^author:/

      if line =~ /^---$/
        if in_frontmatter
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
          if !fm_author.nil? || !og_image.nil?

            out.puts "feed:"
            out.puts "  image: https://www.openhab.org#{og_image}" if og_image
            out.puts "  author:"
            out.puts "    - "
            out.puts "      name: #{fm_author}"
          end

          in_frontmatter = false
        else
          in_frontmatter = true
        end
      end

      out.puts line
    end
  end
end
