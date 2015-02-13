# Put local npm installed scripts to path
export PATH := node_modules/.bin:$(PATH)
TESTS = $(shell find test -name "*.test.js")

test:
	mocha --timeout 5000 --reporter nyan $(TESTS)

all:
	browserify ./app/main.js > static/bundle.js

publish:
	browserify ./app/main.js | uglifyjs > build/bundle.js

.PHONY: test
