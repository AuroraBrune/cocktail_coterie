const db = require("../models");
const user = require("../models");
const SavedCocktail = require("../models");
const guest = require("../models");
const path = require("path");
const express = require("express");
const router = express.Router();

//Create user
router.post("/api/user", function (req, res, cb) {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        prefDrink: req.body.prefDrink,
    }).then(function (dbUser) {
        res.json(dbUser);
        cb();
    });
});

//Update user
router.put("/api/user:id", function (req, res, cb) {
    db.User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        prefDrink: req.body.prefDrink,
    }).then(function (dbUser) {
        res.json(dbUser);
        cb();
    });
});

//Retrieve cocktail saved
router.get("/api/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.findOne({
        where: {
            id: req.params.id
        }.then(function (dbSavedCocktail) {
            res.json(dbSavedCocktail);
            cb();
        })
    });
});

//Find all cocktails saved
router.get("/api/saved-cocktail", function (req, res, cb) {
    db.SavedCocktail.findAll({}).then(function (dbSavedCocktail) {
        res.json(dbSavedCocktail);
        cb();
    });
});

// //Update cocktail saved
router.put("/api/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.update({
        userId: req.body.userId,
        cocktailID: req.body.cocktailID
    })
    cb();
});

// //Delete cocktail
router.delete("/api/saved-cocktail:id", function (req, res, cb) {
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
router.post("/api/guest", function(req, res, cb) {
    db.Guest.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        prefDrink: req.body.prefDrink
    }).then(function (dbGuest) {
        res.json(dbGuest);
        cb();
    });
});

module.exports = router;