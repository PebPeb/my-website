
include config.properties


REPO_DIR := ./src/pelican/content/repo


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

build: pelican
	@cd ./scripts && python3 version.py
	npm run build
start: pelican
	@cd ./scripts && python3 version.py
	npm run start


# cd $(REPO_DIR) && git checkout -B $(REPO_BRANCH) && git pull; 
define manage_content
	@if [ -d "$(REPO_DIR)" ]; then \
		echo "Repository exists, pulling changes..."; \
		cd $(REPO_DIR) && git fetch && git reset --hard origin/$(REPO_BRANCH); \
	else \
		echo "Repository does not exist, cloning..."; \
		git clone -b $(REPO_BRANCH) $(CONTENT_REPO_URL) $(REPO_DIR); \
	fi
endef


pelican:
	$(call manage_content)
	pelican -s ./src/pelican/pelicanconf.py ./src/pelican/content

gen-test-content: clean-test-content
	@cd ./src/pelican/content/ && python3 generate_test_data.py


clean: clean-pelican clean-test-content clean-build
clean-build:
	$(call clean_directory, ./build)
clean-pelican:
	$(call clean_directory, ./src/pelican_build)
clean-test-content:
	$(call clean_directory, ./src/pelican/content/test_data)
