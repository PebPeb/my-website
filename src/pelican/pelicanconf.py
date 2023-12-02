AUTHOR = 'Bryce Keen'
SITENAME = 'brycekeen'
SITEURL = ""

OUTPUT_PATH = "../pelican_build"

ARTICLE_URL = '{category}/{slug}/'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'
INDEX_SAVE_AS = 'posts/index.html'

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

THEME = 'theme'

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True