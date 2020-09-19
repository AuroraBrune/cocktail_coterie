-- Drops the db if it exists currently --
DROP DATABASE IF EXISTS Cocktail_Coterie;
-- Creates the Petite.Soiree database --
CREATE DATABASE Cocktail_Coterie;
USE Cocktail_Coterie;

-- Table to Use to Login Users --
CREATE TABLE users(
    id INTEGER AUTO_INCREMENT NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    preferred_drink VARCHAR(100),
    zoomLink VARCHAR(300),
    password VARCHAR(200) NOT NULL,
    passwordConfirmed VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Drinks 
(id INTEGER NOT NULL auto_increment , 
userID INTEGER NOT NULL, 
showDrink TINYINT(1) NOT NULL, 
strDrink VARCHAR(255) NOT NULL, 
strDrinkAlternate VARCHAR(255), 
strDrinkES VARCHAR(255), 
strDrinkDE VARCHAR(255), 
strDrinkFR VARCHAR(255), 
strDrinkZHHANS VARCHAR(255), 
strDrinkZHHANT VARCHAR(255), 
strTags VARCHAR(255), 
strVideo VARCHAR(255), 
strCategory VARCHAR(255) NOT NULL, 
strIBA VARCHAR(255), 
strAlcoholic VARCHAR(255), 
strGlass VARCHAR(255) NOT NULL, 
strInstructions TEXT, 
strInstructionsES VARCHAR(255), 
strInstructionsDE TEXT, 
strInstructionsFR VARCHAR(255), 
strInstructionsZHHANS VARCHAR(255), 
strInstructionsZHHANT VARCHAR(255), 
strDrinkThumb VARCHAR(255) NOT NULL, 
strIngredient1 VARCHAR(255) NOT NULL, 
strIngredient2 VARCHAR(255) NOT NULL, 
strIngredient3 VARCHAR(255), 
strIngredient4 VARCHAR(255), 
strIngredient5 VARCHAR(255), 
strIngredient6 VARCHAR(255), 
strIngredient7 VARCHAR(255), 
strIngredient8 VARCHAR(255), 
strIngredient9 VARCHAR(255), 
strIngredient10 VARCHAR(255), 
strIngredient11 VARCHAR(255), 
strIngredient12 VARCHAR(255), 
strIngredient13 VARCHAR(255), 
strIngredient14 VARCHAR(255), 
strIngredient15 VARCHAR(255), 
strMeasure1 VARCHAR(255), 
strMeasure2 VARCHAR(255), 
strMeasure3 VARCHAR(255), 
strMeasure4 VARCHAR(255), 
strMeasure5 VARCHAR(255), 
strMeasure6 VARCHAR(255), 
strMeasure7 VARCHAR(255), 
strMeasure8 VARCHAR(255), 
strMeasure9 VARCHAR(255), 
strMeasure10 VARCHAR(255), 
strMeasure11 VARCHAR(255), 
strMeasure12 VARCHAR(255), 
strMeasure13 VARCHAR(255), 
strMeasure14 VARCHAR(255), 
strMeasure15 VARCHAR(255), 
strCreativeCommonsConfirmed VARCHAR(255) NOT NULL, 
createdAt DATETIME NOT NULL, 
updatedAt DATETIME NOT NULL, 
PRIMARY KEY (id));


CREATE TABLE IF NOT EXISTS Guests (
  id INTEGER NOT NULL auto_increment , 
firstName VARCHAR(255) NOT NULL, 
lastName VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL UNIQUE, 
prefLiquor VARCHAR(255) NOT NULL, 
prefWine VARCHAR(255) NOT NULL, 
prefBeer VARCHAR(255) NOT NULL, 
createdAt DATETIME NOT NULL, 
updatedAt DATETIME NOT NULL, 
PRIMARY KEY (id)); 

--Changed Users to UsersA to help with registration--
CREATE TABLE IF NOT EXISTS UsersA (
id INTEGER NOT NULL auto_increment , 
firstName VARCHAR(255) NOT NULL, 
lastName VARCHAR(255) NOT NULL, 
email VARCHAR(255) NOT NULL UNIQUE, 
userName VARCHAR(255) NOT NULL UNIQUE, 
password VARCHAR(255) NOT NULL, 
createdAt DATETIME NOT NULL, 
updatedAt DATETIME NOT NULL, 
DrinkId INTEGER, 
GuestId INTEGER, 
PRIMARY KEY (id), 
FOREIGN KEY (DrinkId) REFERENCES Drinks (id) ON DELETE CASCADE ON UPDATE CASCADE, 
FOREIGN KEY (GuestId) REFERENCES Guests (id) ON DELETE CASCADE ON UPDATE CASCADE);

