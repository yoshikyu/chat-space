require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
  	config.generatprs do |g|
  		g.stylesheets false
  		g,javascripts false
  		g.helpers false
  		g test_framework false
  	end
  end
end