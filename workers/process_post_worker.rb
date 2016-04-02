require_relative 'base'

module Workers
  class ProcessPostWorker < Base
    def perform(post_id)
      comments = comments_api.fetch_comments(post_id)
      elastic_comments.save_comments_bulk(comments)
    end
  end
end
