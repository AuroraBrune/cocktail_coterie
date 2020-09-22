const express = require("express")
const router = express.Router();
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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

router.get('/', (req, res) => {
  res.render('index');
});

//Reaction after Signup
router.get("/", function (req, res) {
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});

//Login Results
router.get("/login", function (req, res) {
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/profile", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "/index"));
});

module.exports = router;




