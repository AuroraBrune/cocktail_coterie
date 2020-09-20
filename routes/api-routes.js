var user = require("../models");
var SavedCocktail = require("../models");
var guest = require("../models");
var path = require("path");
const express = require("express");
var router = express.Router();
//Create user
router.post("../models/user.js", user.create);

//Update user
router.put("../models/user:id", user.update);

//Retrieve cocktail saved
router.get("../models/saved-cocktail:id", SavedCocktail.findOne);

//Find all cocktails saved
router.get("../models/saved-cocktail", SavedCocktail.findAll);

//Update cocktail saved
router.update("../models/saved-cocktail:id", SavedCocktail.update);

//Delete cocktail
router.delete("../models/saved-cocktail:id", SavedCocktail.delete);

//Create Guest 
router.post("../models/guest:id", guest.create);

module.exports = router;