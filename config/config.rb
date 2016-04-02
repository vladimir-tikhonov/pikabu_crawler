require 'yaml'

class Config
  class << self
    def elastic_url
      @elastic_url ||= config_hash['elastic_url']
    end

    def redis_url
      @redis_url ||= config_hash['redis_url']
    end

    private def config_hash
      @config_hash ||= YAML.load_file(File.expand_path("../config.yml", __FILE__)).freeze
    end
  end
end
