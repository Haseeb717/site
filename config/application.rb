require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Site
  class Application < Rails::Application
    config.exceptions_app = self.routes
    config.i18n.enforce_available_locales = false
    config.i18n.available_locales = [:en, :"pt-BR"]
    config.i18n.default_locale = :"pt-BR"
    config.time_zone = 'Brasilia'
    config.active_record.default_timezone = :local
    config.active_record.raise_in_transactional_callbacks = true
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.generators do |g|
      g.test_framework :rspec,  :view_specs => false,
                                :controller_specs => false,
                                :helper_specs => false,
                                :routing_specs => false,
                                :request_specs => false
    end
  end
end
