# frozen_string_literal: true

# Crawl repositories under a base directory and find things in ESH-INF/thing directories
# TODO: doesn't handle translated labels and descriptions...

require "nokogiri"
require "json"

unless ARGV[0]
  puts "Usage: crawlthings.rb rootPath"
  puts "Put smarthome, openhab2-addons, org.openhab.binding.zigbee, org.openhab.binding.zwave repos under rootPath"
  exit(1)
end

$rootDir = Pathname.new(ARGV[0])
$things = []
puts "Crawling #{$rootDir}"

$i = 0
$rootDir.glob("**/ESH-INF/thing/**/*.xml") do |file|
  next if file =~ /test/

  xml = Nokogiri::XML(File.open(file))
  binding_id = xml.xpath("//@bindingId").text
  xml.xpath("//bridge-type|//thing-type").each do |t|
    thing = {
      "id" => "#{binding_id}:#{t["id"]}",
      "label" => t.xpath("label").text,
      # "description" => t.xpath("description").text,
      "bindingId" => binding_id
    }
    $things.push(thing) if thing["id"] != "sample"
  end
end

File.write(".vuepress/components/things/things.json", JSON.pretty_generate($things))

puts "#{$things.size} things written to .vuepress/components/things/things.json"
