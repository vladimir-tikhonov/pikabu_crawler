require 'yaml'
require 'rest-client'

proxies = YAML.load_file('proxies.yml')

proxies.each do |proxy|
  begin
    p RestClient::Request.execute(
      method: :get,
       url: "pikabu.ru/generate_xml_comm.php",
       headers: { params: { id: 1 } },
       proxy: proxy
    ).to_s
    puts 'ok'

  end
end
