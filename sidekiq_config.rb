require 'sidekiq'

require_relative 'workers/fetch_new_comments_worker'
require_relative 'workers/process_post_worker'
