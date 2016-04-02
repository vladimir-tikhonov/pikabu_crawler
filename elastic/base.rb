require 'elasticsearch'

module Elastic
  class Base
    def client
      @client ||= Elasticsearch::Client.new(host: 'elastic:9200')
    end

    def index_name
      'pikabu'.freeze
    end
  end
end
