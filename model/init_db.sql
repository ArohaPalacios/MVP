--
-- Drop Tables
--
-- disable foreign key constraint checks. Allows to drop tables without checking for foreign keys constraints
SET foreign_key_checks = 0;
-- delete table if it exists. MySQL won't let me create a second table with the same name and it will throw an error. Deleting preexisting table prevents this error.
DROP TABLE if exists images;
DROP TABLE if exists sentences;
-- enable foreign key constraint checks. 
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `sentences`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `sentence` TEXT NOT NULL
);
CREATE TABLE `images`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `search_term` VARCHAR(255) NOT NULL,
    `URL` TEXT NOT NULL,
    `type` VARCHAR(255) NULL,
    `concept` VARCHAR(255) NULL,
    `sentences_id` BIGINT UNSIGNED NOT NULL
);
ALTER TABLE
    `images` ADD CONSTRAINT `images_sentences_id_foreign` FOREIGN KEY(`sentences_id`) REFERENCES `sentences`(`id`);