require_relative "boot"
require "rails/all"
require 'dotenv-rails' 

Bundler.require(*Rails.groups)

module SanpoDeGourmet
  class Application < Rails::Application
    config.load_defaults 7.1

    Dotenv::Railtie.load if defined?(Dotenv)

    config.autoload_lib(ignore: %w(assets tasks))
  end
end