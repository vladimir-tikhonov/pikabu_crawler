require 'pp'

require_relative 'pikabu_api/comments'
require_relative 'elastic/comments'

comments_api = PikabuAPI::Comments.new
elastic_comments = Elastic::Comments.new

1.upto(10_000) do |index|
  puts "Processing ##{index}"
  comments = comments_api.fetch_comments(index)
  comments.each do |comment|
    elastic_comments.save_comment(comment)
  end
end
