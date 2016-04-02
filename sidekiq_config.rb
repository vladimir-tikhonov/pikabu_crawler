require 'sidekiq'

Sidekiq.configure_server do |config|
  config.redis = { url: 'redis://redis:6379' }
end

require_relative 'workers/fetch_new_comments_worker'
require_relative 'workers/process_post_worker'
