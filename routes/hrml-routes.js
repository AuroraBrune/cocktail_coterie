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

};