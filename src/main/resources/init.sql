CREATE DATABASE short_stay;

CREATE USER IF NOT EXISTS short_stay_01@'localhost' IDENTIFIED BY 'short_stay_01';

GRANT ALL PRIVILEGES ON short_stay.* TO short_stay_01@'localhost';
