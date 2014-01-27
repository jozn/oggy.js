require 'bundler/setup'
require 'sprockets'
require 'uglifier'

def comment_strip str
  # strip '// ' and '/* .. */'
  #for now we use '// ... '  as comment to not strip
  regs=[/\/\*.*?\*\//im ]#, %r{//.*$}]
  str_cloned = str.dup
  regs.each do |r|
    str_cloned.gsub!(r,"")
  end
  p str_cloned
  str_cloned
end

desc "builds the distribution"
task :build do
  env = Sprockets::Environment.new
  env.prepend_path 'src/'

  #build uncompressed file with comments
  File.open("./build/proto.js","w") do |f|
    f.write env['proto.js'].to_s
  end

  #build uncompressed file with comments striped
  File.open("./build/proto-comact.js","w") do |f|
    f.write comment_strip(env['proto.js'].to_s)
  end

  #build compressed file (minified)
  env.js_compressor= :yui  #or uglifier
  File.open("./build/proto-min.js","w") do |f|
    f.write env['proto.js'].to_s
  end

end
