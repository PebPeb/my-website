

define clean_directory
	@if [ -d $(1) ]; then \
		echo "Removing $(1)"; \
		rm -r $(1); \
	fi
endef

all: clean build

install:
	@cd ./scripts && python3 version.py
	npm install
	@cd ./scripts && python3 unversion.py

build: pelican
	npm run build
start: pelican
	npm run start

pelican:
	pelican -s ./src/pelican/pelicanconf.py ./src/pelican/content

gen-test-content: delete-test-content
	@cd ./src/pelican/content/ && python3 generate_test_data.py


clean: clean-pelican clean-test-content clean-build
clean-build:
	$(call clean_directory, ./build)
clean-pelican:
	$(call clean_directory, ./src/pelican_build)
clean-test-content:
	$(call clean_directory, ./src/pelican/content/test_data)
