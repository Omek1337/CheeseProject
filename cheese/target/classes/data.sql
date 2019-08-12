DROP TABLE url_data IF EXISTS ;
DROP TABLE user_data IF EXISTS ;
 

CREATE TABLE url_data
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  search_tag varchar(255) NOT NULL,
  url varchar(255) NOT NULL,
  url_mp4 varchar(255) NOT NULL,
  user_name varchar(255) NOT NULL
);



INSERT INTO url_data
(search_tag,url,url_mp4, user_name) VALUES
('test', 'test','test','tester');

