require 'sidekiq'
require 'sidekiq/web'

Sidekiq.configure_client do |config|
  config.redis = { url: 'redis://redis:6379' }
end

run Sidekiq::Web
