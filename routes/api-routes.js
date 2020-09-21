const passport = require("../config/passport");
const db = require("../models");
const express = require("express");
const router = express.Router();
const SavedCocktail = require("../models");
const path = require("path");

//Duplicates since they both require models??  Could use db?
const user = require("../models");
const guest = require("../models");


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

//Create Guest 
router.post("../models/guest", function(req, res, cb) {
    db.guest.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        prefDrink: req.body.prefDrink
    }).then(function (dbguest) {
        res.json(dbguest);
        cb();
    })
});

//Working with Passport
module.exports = function() {
    // If the user has valid login credentials, send them to the members page.
    router.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json(req.user);
    });

        // Logging In
  router.get("/login", function(req, res) {
    req.login();
    res.redirect("/");
  });
    // Logging Out
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

   // Allowing Profile for Navigation
   router.get("/api/profile", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      // Otherwise send back the user's email and id for records
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};


module.exports = router;




  

 
