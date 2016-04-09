create-dist:
	rm -rf ./build/*
	ES_HOST=http://164.132.110.157:9200/pikabu/comment MIXPANEL_TOKEN=41bf3fd8b84f7af135455c00ffae9f43 ./node_modules/webpack/bin/webpack.js --config webpack.config.production.js
	rm -rf ./dist/*
	cp -r ./build/* ./dist
