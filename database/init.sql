CREATE DATABASE brycekeen_db;
USE brycekeen_db;

CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    author_id INT,
    date_created DATETIME,
    date_modified DATETIME,
    category_id INT,
    tags VARCHAR(255),
    status ENUM('draft', 'published'),
    featured_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
