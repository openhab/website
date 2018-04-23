["bindings", "persistence", "actions", "integrations", "transformations", "voice"].each { |type|
    Dir.foreach('addons/' + type) { |dir|
        if dir != "." && dir != ".." && dir != "list.txt" then
            # puts dir

            File.readlines('addons/' + type + '/' + dir + '/readme.md').each { |line|
                if line =~ /^label:/ then
                    title = line.gsub("label: ", "").gsub("\n", "")
                    title += ' (1.x)' if dir =~ /1$/
                    puts "['#{type}/#{dir}/', '#{title}'],"
                end
            }
        end
    }
}
