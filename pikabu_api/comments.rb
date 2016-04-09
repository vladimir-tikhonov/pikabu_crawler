require 'rest-client'
require 'nokogiri'

require_relative 'base'
require_relative '../models/comment'

module PikabuAPI
  class Comments < Base
    def fetch_comments(post_id)
      Nokogiri::XML(fetch_comments_xml(post_id)).root.children
        .select { |child| child.name == 'comment' }
        .map { |comment_xml| build_comments(comment_xml, post_id) }
        .compact
    end

    private def fetch_comments_xml(post_id)
      request_url = build_url('generate_xml_comm.php')

      RestClient::Request.execute(
        method: :get,
        url: request_url,
        headers: { params: { id: post_id } },
        proxy: proxy
      ).to_s
    end

    private def build_comments(comment_xml, post_id)
      comment_attributes = comment_xml.to_h
      content_root = comment_xml.child
      return unless content_root
      comment_html = Nokogiri::HTML(content_root.content)
      comment_html.search('.//blockquote').remove
      comment_content = comment_html.xpath('//text()').map(&:text).join(' ')
                        .gsub(/[[:space:]]+/, ' ').strip

      comment_hash = {
        id: comment_attributes['id'].to_i,
        rating: comment_attributes['rating'].to_i,
        author: comment_attributes['nick'],
        content: comment_content,
        post_id: post_id,
        date: Time.parse(comment_attributes['date'])
      }

      Comment.new(*comment_hash.values_at(*Comment.members))
    end
  end
end
