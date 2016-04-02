require_relative 'base'
require_relative 'process_post_worker'

module Workers
  class FetchNewCommentsWorker < Base
    FETCH_LIMIT = 1000

    def perform
      first_post_id = elastic_comments.last_indexed_post_id + 1
      first_post_id.upto(first_post_id + FETCH_LIMIT) do |post_id|
        ProcessPostWorker.perform_async(post_id)
      end
    end
  end
end
