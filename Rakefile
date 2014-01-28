require 'bundler/setup'
require 'sprockets'
#require 'uglifier'

def comment_strip str
  # strip '// ' and '/* .. */'
  #for now we use '// ... '  as comment to not strip
  regs=[/\/\*.*?\*\//im ]#, %r{//.*$}]
  str_cloned = str.dup
  regs.each do |r|
    str_cloned.gsub!(r,"")
  end
  str_cloned
end

desc "builds the distribution"
task :build do
  env = Sprockets::Environment.new
  env.prepend_path 'src/'
  lib_path = 'oggy.js'
  lib_name = 'oggy'

  #build uncompressed file with comments
  File.open("./build/#{lib_name}.js","w") do |f|
    f.write env[lib_path].to_s
  end

  #build uncompressed file with comments striped
  File.open("./build/#{lib_name}-comact.js","w") do |f|
    f.write comment_strip(env[lib_path].to_s)
  end

  #build compressed file (minified)
  env.js_compressor= :yui  #or uglifier
  File.open("./build/#{lib_name}-min.js","w") do |f|
    f.write env[lib_path].to_s
  end

end
