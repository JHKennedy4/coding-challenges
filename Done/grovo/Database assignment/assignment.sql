-- 1
SELECT
l.courselesson_id AS "Lesson ID",
TIME(l.view_timestamp) AS "Time"
FROM lessonviews l JOIN users u
ON l.user_id = u.id
WHERE u.email = "ted@grovo.com"
    AND DATE(l.view_timestamp) = "2013-3-27"
ORDER BY TIME asc;

-- 2
SELECT
SUBSTRING(email, locate("@", `email`)) AS domain,
COUNT(lessonviews.id) AS views
FROM users JOIN `lessonviews`
ON users.id = lessonviews.user_id
GROUP BY domain ORDER BY views ASC;

-- 3
SELECT * FROM lessonviews
WHERE lessonviews.user_id NOT IN (
    SELECT id FROM users
)

-- 3 bonus
SELECT lessonviews.*
FROM lessonviews
LEFT JOIN users
ON users.id = lessonviews.user_id
WHERE users.id IS NULL;

-- 4
-- Adding a foreign key on lessonviews user_id to users id would prevent this inconsistency
ALTER TABLE lessonviews
ADD CONSTRAINT FK_user_id
FOREIGN KEY (user_id) REFERENCES users(id);

-- 5
DELETE from lessonviews
WHERE user_id NOT IN (
	SELECT id FROM users
)

