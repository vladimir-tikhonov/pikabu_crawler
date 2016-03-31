require_relative 'base'

module Elastic
  class Comments < Base
    def save_comment(comment)
      client.index(
        index: index_name,
        type: mapping_name,
        id: comment.id,
        body: {
          rating: comment.rating,
          author: comment.author,
          content: comment.content,
          post_id: comment.post_id,
          date: comment.date
        }
      )
    end

    private def mapping_name
      'comment'.freeze
    end
  end
end
