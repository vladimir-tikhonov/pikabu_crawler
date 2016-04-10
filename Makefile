start:
	docker-compose up

start-production:
	docker-compose --file docker-compose.production.yml -d up

install-deps:
	docker-compose run --rm sidekiq bundle install --path vendor/bundle
