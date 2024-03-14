--
-- Drop Tables
--
-- disable foreign key constraint checks. Allows to drop tables without checking for foreign keys constraints
SET foreign_key_checks = 0;
-- delete table if it exists. MySQL won't let me create a second table with the same name and it will throw an error. Deleting preexisting table prevents this error.
DROP TABLE if exists students;
DROP TABLE if exists students;
-- enable foreign key constraint checks. 
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `sentence`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `concepts_id` TEXT NOT NULL,
    `words` TEXT NOT NULL
);
CREATE TABLE `concepts`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `URL` BIGINT NOT NULL
);
ALTER TABLE
    `sentence` ADD CONSTRAINT `sentence_concepts_id_foreign` FOREIGN KEY(`concepts_id`) REFERENCES 