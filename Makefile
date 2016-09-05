SHELL := /bin/bash

dev:
	npm run start

lint:
	npm run lint

build:
	npm run build

publish:
	npm publish --registry http://registry.npmjs.org
