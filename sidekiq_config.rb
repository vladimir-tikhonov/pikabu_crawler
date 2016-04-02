require 'sidekiq'

class FetchNewCommentsWorker
  include Sidekiq::Worker

  def perform
    fail NotImplementedError
  end
end
