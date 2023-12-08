

define clean_directory
	@if [ -d $(1) ]; then \
		echo "Removing $(1)"; \
		rm -r $(1); \
	fi
endef

all: clean build

build: pelican
	npm run build

pelican:
	pelican -s ./src/pelican/pelicanconf.py ./src/pelican/content

gen-test-content: delete-test-content
	@cd ./src/pelican/content/ && python3 generate_test_data.py
delete-test-content:
	$(call clean_directory, ./src/pelican/content/test_data)

clean:
	$(call clean_directory, ./build)
	$(call clean_directory, ./src/pelican_build)
	$(call clean_directory, ./src/pelican/content/test_data)