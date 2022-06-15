DROP DATABASE IF EXISTS `daddybugDB`;
CREATE DATABASE `daddybugDB`;
USE `daddybugDB`;

CREATE TABLE user (
    user_id INT UNSIGNED AUTO_INCREMENT,
    lName VARCHAR(50) NOT NULL,
    fName VARCHAR(50) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (user_id)
);

CREATE TABLE artist (
    artist_id INT UNSIGNED AUTO_INCREMENT,
    lName VARCHAR(50) NOT NULL,
    fName VARCHAR(50),
    alias VARCHAR(50),
    CONSTRAINT pk_artist PRIMARY KEY (artist_id)
);

CREATE TABLE label (
    label_id INT UNSIGNED AUTO_INCREMENT,
    label VARCHAR(50) NOT NULL,
    CONSTRAINT pk_label PRIMARY KEY (label_id)
);

CREATE TABLE band (
    band_id INT UNSIGNED AUTO_INCREMENT,
    band VARCHAR(50) NOT NULL,
    CONSTRAINT pk_band PRIMARY KEY (band_id)
);

CREATE TABLE genre (
    genre_id INT UNSIGNED AUTO_INCREMENT,
    genre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE album (
    album_id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    band_id INT UNSIGNED NOT NULL,
    label_id INT UNSIGNED NOT NULL,
    year YEAR NOT NULL,
    img VARCHAR(100),
    price DECIMAL(5,2),
    CONSTRAINT pk_album PRIMARY KEY (album_id),
    CONSTRAINT fk_band_id FOREIGN KEY (band_id) REFERENCES band (band_id),
    CONSTRAINT fk_label_id FOREIGN KEY (label_id) REFERENCES label (label_id)
);

ALTER TABLE album ADD COLUMN condition ENUM('M', 'NM', 'VG', 'G');

CREATE TABLE album_to_artist (
    album_id INT UNSIGNED,
    artist_id INT UNSIGNED,
    CONSTRAINT fk_album_id FOREIGN KEY (album_id) REFERENCES album (album_id),
    CONSTRAINT fk_artist_id FOREIGN KEY (artist_id) REFERENCES artist (artist_id)
);

CREATE TABLE album_to_genre (
    album_id INT UNSIGNED,
    genre_id INT UNSIGNED,
    CONSTRAINT fk_album_id2 FOREIGN KEY (album_id) REFERENCES album (album_id),
    CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genre (genre_id) 
);


-- use MODIFY rather than ALTER
ALTER TABLE album MODIFY COLUMN img VARCHAR (500);