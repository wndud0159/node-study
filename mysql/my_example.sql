-- database create ex
CREATE DATABASE opentutorials;
-- database delete ex
DROP DATABASE opentutorials;

-- table create ex
CREATE TABLE topics (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created DATETIME NOT NULL,
    author VARCHAR(15) NULL,
    profile VARCHAR(200) NULL,
    PRIMARY KEY(id)
);

-- table delete ex
DROP TABLE topics;

-- table structure ex
DESC topics;

-- table one insert ex
INSERT INTO topics (title, description, created, author, profile) 
VALUES('MySQL', '본문', NOW(), 'juyoung', 'developer');

-- table all insert ex
INSERT INTO topics 
(title, description, created, author, profile) 
VALUES
('ORACLE', '본문2', NOW(), '최주순', 'data scientist'),
('MSSQL', '본문3', NOW(), '최주빵', 'developer'),
('PostgreSQL', '본문4', NOW(), 'juyoung', 'developer'),
('MongoDB', '본문4', NOW(), 'juyoung', 'developer');

-- table select ex
SELECT * FROM topics;

-- table where ex
SELECT * FROM topics WHERE author='juyoung';

--table order by ex
SELECT * FROM topics WHERE author='juyoung' ORDER BY id DESC; 
SELECT * FROM topics WHERE author='juyoung' ORDER BY id ASC; 

-- table limit ex
SELECT * FROM topics WHERE author='juyoung' ORDER BY id ASC LIMIT 2;

-- table update ex
UPDATE topics SET 
    description='본문1',
    title='SQL Server'
WHERE title='MySQL';

-- table delete ex
DELETE topics FROM topics WHERE id=5;



-- table join
-- structure for table `author`
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `profile` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
-- Dumping data for table `author`
INSERT INTO `author` VALUES (1,'egoing','developer'),
(2,'duru','database administrator'),
(3,'taeho','data scientist, developer');
 
-- Table structure for table `topic`
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  `description` text,
  `created` datetime NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
-- Dumping data for table `topic`
INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1),
(2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1),
(3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2),
(4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3),
(5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1);

-- join
SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id;
-- or
SELECT topic.id AS topic_id, title, description, created, name, profile
FROM topic LEFT JOIN author ON topic.author_id = author.id;