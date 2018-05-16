# Executed after `vuepress build`.
# Removes all prefetch directives from index.html.

filepath = "vuepress/index.html"
IO.write(filepath, File.open(filepath) {|f| f.read.gsub(/<link rel="prefetch" href=".*">$/, "")})
