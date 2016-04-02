require 'sidekiq'

require_relative '../elastic/comments'
require_relative '../pikabu_api/comments'

module Workers
  class Base
    include Sidekiq::Worker

    def elastic_comments
      @elastic_comments ||= Elastic::Comments.new
    end

    def comments_api
      @comments_api ||= PikabuAPI::Comments.new
    end
  end
end
