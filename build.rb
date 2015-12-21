require 'actioncable'
require 'sprockets'

environment = Sprockets::Environment.new
environment.append_path File.join(Gem::Specification.find_by_name('actioncable').gem_dir, 'lib/assets/javascripts')
puts environment.find_asset('cable.coffee.erb').to_s
