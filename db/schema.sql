-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS Cocktail_Coterie;
-- Creates the Petite.Soiree database --
CREATE DATABASE Cocktail_Coterie;
USE Cocktail_Coterie;

-- Table to Use to Login Users --
CREATE TABLE login(
    email VARCHAR(100) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    preferred_drink VARCHAR(100),
    zoomLink VARCHAR(300),
    password VARCHAR(200) NOT NULL,
    confirmed_password VARCHAR(200) NOT NULL,
  PRIMARY KEY (email)
);
