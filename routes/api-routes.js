var user = require("../models");
var SavedCocktail = require("../models");
var guest = require("../models");
var path = require("path");
const express = require("express");
var router = express.Router();
//Create user
router.post("/", user.create);

//Update user
router.put("/:id", user.update);

//Retrieve cocktail saved
router.get("/:id", SavedCocktail.findOne);

//Find all cocktails saved
router.get("/:id", SavedCocktail.findAll);

//Update cocktail saved
router.update("/:id", SavedCocktail.update);

//Delete cocktail
router.delete("/:id", SavedCocktail.delete);

//Create Guest 
router.post("/:id", guest.create);

module.exports = router;