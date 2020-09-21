const db = require("../models");
const user = require("../models");
const SavedCocktail = require("../models");
const guest = require("../models");
const path = require("path");
const express = require("express");
const router = express.Router();

//Create user
router.post("../models/user", function (req, res, cb) {
    db.user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        prefDrink: req.body.prefDrink,
    }).then(function (dbuser) {
        res.json(dbuser);
        cb();
    });
});

//Update user
router.put("../models/user:id", function (req, res, cb) {
    db.user.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        prefDrink: req.body.prefDrink,
    }).then(function (dbuser) {
        res.json(dbuser);
        cb();
    });
});

//Retrieve cocktail saved
router.get("../models/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.fineOne({
        where: {
            id: req.params.id
        }.then(function (dbSavedCocktail) {
            res.json(dbSavedCocktail);
            cb();
        })
    });
});

//Find all cocktails saved
router.get("../models/saved-cocktail", function (req, res, cb) {
    db.SavedCocktail.findAll({}).then(function (dbSavedCocktail) {
        res.json(dbSavedCocktail);
        cb();
    });
});

// //Update cocktail saved
router.put("../models/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.update({
        userId: req.body.userId,
        cocktailID: req.body.cocktailID
    })
    cb();
});

// //Delete cocktail
router.delete("../models/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.findOne({
        where: {
            id: req.params.id
        }.then(function (dbSavedCocktail) {
            res.json(dbSavedCocktail);
            cb();
        })
    });
});

// //Create Guest 
router.post("../models/guest", function(req, res, cb) {
    db.guest.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        prefDrink: req.body.prefDrink
    }).then(function (dbguest) {
        res.json(dbguest);
        cb();
    });
});

module.exports = router;