# Crawl directories and find things in ESH-INF/thing directories - acceots 
# TODO: doesn't handle translated labels and descriptions...

require "nokogiri"
require "json"

if (!ARGV[0])
    puts "Usage: crawlthings.rb rootPath"
    puts "Put smarthome, openhab2-addons, org.openhab.binding.zigbee, org.openhab.binding.zwave repos under rootPath"
    exit(1)
end

$rootDir = ARGV[0] + File::SEPARATOR
$things = []
puts "Crawling #{$rootDir}"

$i = 0
Dir.glob($rootDir + "**/*/").each { |dir|
    if dir =~ /ESH-INF\/thing\// && !(dir =~ /test/) then
        Dir.foreach(dir) { |file|
            if file != "." && file != ".." && file != "channels" && !(file =~ /^_/) then
                # puts dir + file
                xml = Nokogiri::XML(open(dir + file))
                bindingId = xml.xpath("//@bindingId").text
                xml.xpath("//bridge-type|//thing-type").each { |t|
                    thing = {
                        "id" => t["id"],
                        "label" => t.xpath("label").text,
                        "description" => t.xpath("description").text,
                        "bindingId" => bindingId
                    }
                    $things.push(thing) if thing["id"] != "sample"
                }
            end
        }
    end
}

File.open(".vuepress/components/things/things.json", "w+") { |f|
    f.write(JSON.pretty_generate($things))
}

puts "#{$things.size} things written to .vuepress/components/things/things.json"
