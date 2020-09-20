const express = require("express")
const router = express.Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/auth");

router.get("/", function (req, res) {
    res.render("index")
});

router.get('/register', (req, res) => {
    res.render('register');
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

router.get("/saved-cocktails ", function (req, res) {
    res.render("saved-cocktails ")
});

//User log out
router.get("/log-out", function (req, res) {
    res.render("log-out")
});

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;