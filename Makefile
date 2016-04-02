start:
	docker-compose up

install-deps:
	docker-compose run --rm sidekiq bundle install --path vendor/bundle
