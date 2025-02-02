USE brycekeen_develop_db;

INSERT INTO posts (title, content, author_id, date_created, date_modified, category_id, tags, status, featured_image)
VALUES ('Sample Post Title', 'This is the content of the sample post.', 1, NOW(), NOW(), 1, 'sample, post', 'published', 'path/to/featured_image.jpg');
