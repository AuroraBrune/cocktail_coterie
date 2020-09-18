// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const express = require("express")
var router = express.Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {


    router.get("/", function (req, res) {
        res.render("index")
    });

    router.get("/signup", function (req, res) {
        res.render("signup")
    });

    router.get("/login", function (req, res) {
        res.render("login")
    });

    router.get("/profile", function (req, res) {
        res.render("profile")
    });

    router.get("/create-party", function (req, res) {
        res.render("create-party")
    });

    router.get("/search-cocktails", function (req, res) {
        res.render("search-cocktails")
    });

    router.get("/log-out", function (req, res) {
        res.render("log-out")
    });

    router.get("/saved-cocktails ", function (req, res) {
        res.render("saved-cocktails ")
    });



    // app.get("/", function (req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //         res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/signup.html"));
    // });

    // app.get("/login", function (req, res) {
    //     // If the user already has an account send them to the members page
    //     if (req.user) {
    //         res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    // });

    // // Here we've add our isAuthenticated middleware to this route.
    // // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/members", isAuthenticated, function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });

};