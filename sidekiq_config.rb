require 'sidekiq'

require_relative 'config/config'

Sidekiq.configure_server do |config|
  config.redis = { url: Config.redis_url }
end

require_relative 'workers/fetch_new_comments_worker'
require_relative 'workers/process_post_worker'
