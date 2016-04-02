require 'time'

require_relative 'base'

module Elastic
  class Comments < Base
    def save_comments_bulk(comments)
      request_body = comments.map do |comment|
        { index: build_index_hash(comment) }
      end
      return if request_body.empty?

      client.bulk(body: request_body)
    end

    private def build_index_hash(comment)
      {
        _index: index_name,
        _type: mapping_name,
        _id: comment.id,
        data: {
          rating: comment.rating,
          author: comment.author,
          content: comment.content,
          post_id: comment.post_id,
          date: comment.date.iso8601
        }
      }
    end

    private def mapping_name
      'comment'.freeze
    end
  end
end
