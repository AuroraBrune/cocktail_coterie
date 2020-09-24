const express = require("express")
const db = require("../models");
const router = express.Router();
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/register', (req, res) => {
  res.render('register');
});

router.get("/login", function (req, res) {
  res.render("login")
});

// nb: add isAuthenticated, before async to protect this route
router.get('/profile/:id', async function (req, res, cb) {
  const user = await db.User.findOne({
    where: {
      id: req.params.id,
    }
  })
  res.render('profile', { user: user.dataValues });
});

router.get('/profile/', isAuthenticated, function (req, res) {
  // req.user is populated by passport after the user authenticates
  res.redirect('/profile/' + req.user.id)
})

router.get("/create-party", function (req, res) {
  res.render("create-party")
});

router.get("/search-cocktails", function (req, res) {
  res.render("search-cocktails")
});

// router.get("/saved-cocktails", function (req, res) {
//   res.render("saved-cocktails")
// });

router.get("/:pageName", function (req, res) {
  console.log(req.params.pageName)
  switch(req.params.pageName){
    case  "saved-cocktails":
    break;

    case  "search-cocktails":
    break;

    case "create-party":
    break;

    case "profile":
    break;

    case "register":
    break;

    default:
    res.sendFile(path.join(__dirname, "../views/Invitations/" + req.params.pageName + ".html"))
  
  }
})

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;




