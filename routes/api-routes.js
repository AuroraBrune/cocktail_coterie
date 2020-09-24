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
        // prefDrink: req.body.prefDrink,
    }).then(function (dbUser) {
        console.log(dbUser)
        let id = dbUser.id
        cb()
        res.redirect("/profile/" + id)
    }).catch(function (err) {
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
    db.SavedCocktail.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbSavedCocktail) {
        res.json(dbSavedCocktail);
        cb();
    })
});

//Find all cocktails saved
router.get("/api/saved-cocktail", function (req, res, cb) {
    db.SavedCocktail.findAll({}).then(function (dbSavedCocktail) {
        res.json(dbSavedCocktail);
        cb();
    });
});

// // //Update cocktail saved
// router.put("/api/saved-cocktail:id", function (req, res, cb) {
//     db.SavedCocktail.update({
//         userId: req.body.userId,
//         cocktailID: req.body.cocktailID
//     })
//     cb();
// });

// //Delete cocktail
router.delete("/api/saved-cocktail:id", function (req, res, cb) {
    db.SavedCocktail.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (dbSavedCocktail) {
        res.json(dbSavedCocktail);
        cb();
    });
});

// //Create Guest 
// router.post("/api/guest", function(req, res, cb) {
//     db.Guest.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         prefDrink: req.body.prefDrink
//     }).then(function (dbguest) {
//         res.json(dbguest);
//         cb();
//     })
// });


// If the user has valid login credentials, send them to the members page.
router.post("/api/login", passport.authenticate("local"), async function (req, res, cb) {
    console.log("logged in")
    const dbUser = await db.User.findOne({
        where: {
            email: req.body.email
        }
    })
    cb()
    let id = dbUser.id
    res.json(id)
});



// Logging Out
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// Allowing Profile for Navigation
router.get("/api/profile", function (req, res) {
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

// router.post("/api/writeInvitation", function (req, res) {
//     const fs = require("fs")
//     const util = require("util")

//     //changes fs.writeFile into a promise oriented object
//     const writeFileAsync = util.promisify(fs.writeFile)
//     console.log(req.body)
//     let { email, name, date, time, description, zoom } = req.body
//     //use email to get user id 
//     let pageName = email.split("@")[0] + "-" + name
//     writeFileAsync("./views/Invitations/" + pageName + ".html",
//         `<!DOCTYPE html>
// <html lang="en">
//   <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//         <!--brings in bootstrap and the jquery bootstrap requires-->
// 		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
// 		<!-- google fonts-->
// 		<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
// 		<!--personal css-->
// 		<link rel="stylesheet" href="/css/style.css" />
// 		<!--tab icon -->
// 		<link rel="icon" href="images/favicon.ico" alt = "logo"><br>
//     <title>${name}</title>
//   </head>
//   <body>
//   <h1>${name}</h1>
//   <h1>${date}</h1>
//   <h1>${time}</h1>
//   <h1>${description}</h1>
//   <h1>${zoom}</h1>
//   </body>
//   </html>`)
//         .then(function (err) {
//             if (err) res.json(err);
//             res.json(pageName)
//         })
// })


module.exports = router;

