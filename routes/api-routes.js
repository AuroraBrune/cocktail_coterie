const passport = require("../config/passport");
const db = require("../models");
const express = require("express");
const router = express.Router();
const path = require("path");

//Create user
router.post("/api/signup", function (req, res, cb) {
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password, 
        //<-- not necessary because password is handed on user.js file
        //Should hashed password replace that?  password:hashedPassword
        //passwordConfirmed: hashedPassword
       // prefDrink: req.body.prefDrink,
    }).then(function (dbUser) {
       // res.json(dbUser);
        res.redirect("/profile");
       cb()
    }).catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
});

//Update user
//Tutor changed this... don't know what it was before...
router.put("/api/users/update", function (req, res, cb) {
    db.User.update({
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
router.get("/api/saved-cocktail:id", function (req, res, cb) {
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

//Create Guest 
router.post("/api/guest", function(req, res, cb) {
    db.Guest.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        prefDrink: req.body.prefDrink
    }).then(function (dbguest) {
        res.json(dbguest);
        cb();
    })
});


// If the user has valid login credentials, send them to the members page.
router.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log("logged in")
   // res.json(req.User);
    res.redirect("/profile")
});

    // Logging In
// router.get("/login", function(req, res) {
// req.login();
// res.redirect("/profile");
// });
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

router.post("/api/writeInvitation", function(req, res){
const fs = require("fs")
const util = require("util")

//changes fs.writeFile into a promise oriented object
const writeFileAsync = util.promisify(fs.writeFile)
console.log(req.body)
let {email, name, date, time, description, zoom} = req.body
//use email to get user id 
let pageName = email.split("@")[0] + "-" + name
writeFileAsync( "./views/Invitations/" + pageName + ".html",
`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${name}</title>
  </head>
  <body>
  <h1>${name}</h1>
  <h1>${date}</h1>
  <h1>${time}</h1>
  <h1>${description}</h1>
  <h1>${zoom}</h1>
  </body>
  </html>`)
  .then(function(err){
      if(err) res.json(err);
      res.json(pageName)
  })
})


module.exports = router;

