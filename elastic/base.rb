require 'elasticsearch'

require_relative '../config/config'

module Elastic
  class Base
    def client
      @client ||= Elasticsearch::Client.new(host: Config.elastic_url)
    end

    def index_name
      'pikabu'.freeze
    end
  end
end
