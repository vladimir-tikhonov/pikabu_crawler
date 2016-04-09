require 'uri'
require 'yaml'

module PikabuAPI
  class Base
    def build_url(method)
      URI.join('http://pikabu.ru', method).to_s
    end

    def headers
      {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
        'Host': 'pikabu.ru',
        'Origin': 'pikabu.ru'
      }
    end

    def proxy
      proxies.sample
    end

    private def proxies
      @proxies ||= if File.exist?('proxies.yml')
        YAML.load_file('proxies.yml')
      else
        []
      end
    end
  end
end
