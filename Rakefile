require 'rake'
require 'rake/packagetask'
require 'yaml'

module PrototypeHelper
  ROOT_DIR      = File.expand_path(File.dirname(__FILE__))
  SRC_DIR       = File.join(ROOT_DIR, 'src')
  DIST_DIR      = File.join(ROOT_DIR, 'dist')
  DOC_DIR       = File.join(ROOT_DIR, 'doc')
  TEMPLATES_DIR = File.join(ROOT_DIR, 'templates')
  PKG_DIR       = File.join(ROOT_DIR, 'pkg')
  TEST_DIR      = File.join(ROOT_DIR, 'test')
  TEST_UNIT_DIR = File.join(TEST_DIR, 'unit')
  TMP_DIR       = File.join(TEST_UNIT_DIR, 'tmp')
  VERSION       = YAML.load(IO.read(File.join(SRC_DIR, 'constants.yml')))['PROTOTYPE_VERSION']
  
  DEFAULT_SELECTOR_ENGINE = 'sizzle'
  
  # Possible options for PDoc syntax highlighting, in order of preference.
  SYNTAX_HIGHLIGHTERS = [:pygments, :coderay, :none]

  %w[sprockets pdoc unittest_js caja_builder].each do |name|
    $:.unshift File.join(PrototypeHelper::ROOT_DIR, 'vendor', name, 'lib')
  end
    
  def self.sprocketize(options = {})
    options = {
      :destination    => File.join(DIST_DIR, options[:source]),
      :strip_comments => true
    }.merge(options)
    
    require_sprockets
    load_path = [SRC_DIR]
    
    if selector_path = get_selector_engine(options[:selector_engine])
      load_path << selector_path
    end
    
    secretary = Sprockets::Secretary.new(
      :root           => File.join(ROOT_DIR, options[:path]),
      :load_path      => load_path,
      :source_files   => [options[:source]],
      :strip_comments => options[:strip_comments]
    )
    
    secretary.concatenation.save_to(options[:destination])
  end

  def self.require_sprockets
    require_submodule('Sprockets', 'sprockets')
  end
  
  def self.require_pdoc
    require_submodule('PDoc', 'pdoc')
  end
  
  def self.require_unittest_js
    require_submodule('UnittestJS', 'unittest_js')
  end
end

task :default => [:dist, :dist_helper, :package, :clean_package_source]

desc "Builds the distribution."
task :dist do
  PrototypeHelper.sprocketize(
    :path => 'src',
    :source => 'prototype.js',
    :selector_engine => ENV['SELECTOR_ENGINE'] || PrototypeHelper::DEFAULT_SELECTOR_ENGINE
  )
end