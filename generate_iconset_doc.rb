# frozen_string_literal: true

# This script re-generate a VuePress-compatible version of an
# iconset's documentation

require "csv"
require "fileutils"

$original_iconsets_location = ARGV[0]
$iconset_name = ARGV[1]
$data_dir = ARGV[2]
$out_dir = ARGV[3]

if !$original_iconsets_location || !$iconset_name || !$data_dir || !$out_dir
  puts "Usage: generate_iconset_doc.rb <original_markdown_page> <data_dir> <out_dir>"
  exit(1)
end

$icons_list = []
$categories_channels = {}
$categories_places = []
$categories_thing = []

Dir.glob("#{$original_iconsets_location}/#{$iconset_name}/src/main/resources/icons/*.svg") do |path|
  $icons_list.push(File.basename(path))
end

CSV.foreach("#{$data_dir}/categories.csv", headers: true) do |cat|
  $categories_channels[cat[0]] = [] unless $categories_channels.include?(cat[0])
  $categories_channels[cat[0]].push(cat[1])
end

CSV.foreach("#{$data_dir}/categories_places.csv", headers: true) do |cat|
  $categories_places.push(cat[0])
end

CSV.foreach("#{$data_dir}/categories_thing.csv", headers: true) do |cat|
  $categories_thing.push(cat[0])
end

FileUtils.mkdir_p("#{$out_dir}/#{$iconset_name}")
File.open("#{$out_dir}/#{$iconset_name}/readme.md", "w+") do |f|
  f.puts "---"
  f.puts "title: Icons"
  f.puts "categories:"
  f.puts "  channels:"
  $categories_channels.each do |k, c|
    f.puts "    #{k}:"
    c.each do |i|
      f.puts "    - #{i.downcase}"
    end
  end

  f.puts "  places:"
  $categories_places.each do |i|
    f.puts "  - #{i.downcase}"
  end
  f.puts "  things:"
  $categories_thing.each do |i|
    f.puts "  - #{i.downcase}"
  end

  f.puts "---"
  f.puts
  f.puts "# Icons"
  f.puts
  f.puts "These are the classic icons from Eclipse SmartHome."
  f.puts
  f.puts "These icons can be used when describing Items. You can also add your own. See the [instructions](/docs/configuration/items.html#icons) to learn more."
  f.puts
  f.puts "<IconsetDisplay icons=\"#{$icons_list.join(",")}\"/>"
end

puts "   ➡️ File written in #{$out_dir}/#{$iconset_name}/readme.md"

# FileUtils.mkdir_p(".vuepress/public/iconsets")
FileUtils.cp_r("#{$original_iconsets_location}/#{$iconset_name}/src/main/resources/icons", ".vuepress/public/iconsets/#{$iconset_name}")

puts "   ➡️ Icons copied to .vuepress/public/iconsets/#{$iconset_name}"
