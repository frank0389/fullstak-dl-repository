DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
CREATE USER 'dl'@'%' IDENTIFIED BY 'fullstack*2024';
GRANT ALL ON users.* TO 'dl'@'%';

USE users;

-- Start of IDENTITY Tables (USER MANAGER MODULE) --
CREATE TABLE IF NOT EXISTS um_user (
  ID INTEGER NOT NULL AUTO_INCREMENT,
	user_name VARCHAR (50) NOT NULL,
	password_hash VARCHAR (60) NOT NULL,
	first_name VARCHAR (50),
	last_name VARCHAR (50),
	email VARCHAR (50),
	PRIMARY KEY (ID),
	CONSTRAINT user_name_constraint UNIQUE (user_name)
)ENGINE INNODB;

