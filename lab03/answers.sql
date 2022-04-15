-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name FROM users ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id FROM posts WHERE user_id = 26;



-- Exercise 5
SELECT id, image_url, user_id FROM posts WHERE user_id = 26 OR user_id = 12;



-- Exercise 6
SELECT COUNT(*) FROM posts;



-- Exercise 7
SELECT user_id, count(*) FROM comments GROUP BY user_id ORDER BY count(*) desc;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.user_id = 26 OR posts.user_id = 12;



-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id FROM posts INNER JOIN following ON posts.user_id = following.following_id WHERE following.user_id = 26 ORDER BY posts.id;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES(596, 26, 219, '2022-04-22 07:37:16-08');
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES(597, 26, 220, '2022-04-22 07:38:12-03');
INSERT INTO bookmarks (id, user_id, post_id, timestamp) VALUES(598, 26, 221, '2022-04-22 07:39:21-01');


-- Exercise 12
DELETE FROM bookmarks WHERE id = 596 OR id = 597 OR id = 598;



-- Exercise 13
UPDATE users SET email = 'knick2022@gmail.com' WHERE id = 26;



-- Exercise 14
