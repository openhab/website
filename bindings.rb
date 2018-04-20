Dir.foreach('addons/bindings') { |dir|
    if dir != "." && dir != ".." && dir != "list.txt" then
        # puts dir

        File.readlines('addons/bindings/' + dir + '/readme.md').each { |line|
            if line =~ /^label:/ then
                title = line.gsub("label: ", "").gsub("\n", "")
                title += ' (1.x)' if dir =~ /1$/
                puts "['bindings/#{dir}/', '#{title}'],"
            end
        }
    end
}
