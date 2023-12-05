AUTHOR = 'Bryce Keen'
SITENAME = 'brycekeen'
SITEURL = ""

OUTPUT_PATH = "../pelican_build"

ARTICLE_URL = '{category}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'

CATEGORY_SAVE_AS = '{slug}s/index.html'
CATEGORY_URL = '{slug}s/index.html'

INDEX_SAVE_AS = False
# INDEX_SAVE_AS = { 
#     'posts/index.html',
#     'projects/index.html'
# }

# Disable generation of tags
TAGS_SAVE_AS = ''
TAG_SAVE_AS = ''

# Disable generation of author information
AUTHORS_SAVE_AS = ''
AUTHOR_SAVE_AS = ''

PATH = "content"

TIMEZONE = 'Canada/Eastern'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

# Add the search page to the list of pages to be generated
PAGES = [('search.html', 'Search', 'Search')]
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'archives', 'search']
SEARCH_URL = 'search/'
SEARCH_SAVE_AS = 'search/index.html'

THEME = 'theme'

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

def get_preview(content, length=75):
    """Custom filter to get a preview of the content."""
    words = content.split()[:length]
    return ' '.join(words) + "..."

import sys
sys.path.append('.')

JINJA_FILTERS = {'get_preview':get_preview}