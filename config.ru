require 'sidekiq'
require 'sidekiq/web'

require_relative 'config/config'

Sidekiq.configure_client do |config|
  config.redis = { url: Config.redis_url }
end

run Sidekiq::Web
