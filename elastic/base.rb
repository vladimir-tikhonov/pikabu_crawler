require 'elasticsearch'

module Elastic
  class Base
    def client
      @client ||= Elasticsearch::Client.new
    end

    def index_name
      'pikabu'.freeze
    end
  end
end
