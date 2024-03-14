--
-- Drop Tables
--
-- disable foreign key constraint checks. Allows to drop tables without checking for foreign keys constraints
SET foreign_key_checks = 0;
-- delete table if it exists. MySQL won't let me create a second table with the same name and it will throw an error. Deleting preexisting table prevents this error.
DROP TABLE if exists sentence;
DROP TABLE if exists concepts;
-- enable foreign key constraint checks. 
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `images`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `search term` VARCHAR(255) NOT NULL,
    `URL` BIGINT NOT NULL,
    `type` VARCHAR(255) NULL,
    `Concept_to_explain` VARCHAR(255) NOT NULL,
    `order` BIGINT NULL
);