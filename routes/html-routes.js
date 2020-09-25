const express = require('express');
const db = require('../models');
const router = express.Router();
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/register', function (req, res) {
  res.render('register');
});

router.get('/login', function (req, res) {
  res.render('login');
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


router.get("/create-party", isAuthenticated, async function (req, res, cb) {
  const savedDrinks = await db.SavedDrink.findAll({
    where: {
      userId: req.user.id,
    }
  })

  
  let usersDrinks = []
  for (i=0; i<savedDrinks.length; i++) {
    let drinkInfo = await db.Drink.findAll({
      where: {
        id: savedDrinks[i].dataValues.drinkId
      }
    })
    console.log(drinkInfo)
    console.log(drinkInfo[0].dataValues)

    usersDrinks.push(drinkInfo[0].dataValues)
    console.log(usersDrinks)
  }
  
  res.render('create-party', {usersDrinks: usersDrinks});
})

router.get("/saved-cocktails", isAuthenticated, async function (req, res, cb) {
  const savedDrinks = await db.SavedDrink.findAll({
    where: {
      userId: req.user.id,
    }
  })

  
  let usersDrinks = []
  for (i=0; i<savedDrinks.length; i++) {
    let drinkInfo = await db.Drink.findAll({
      where: {
        id: savedDrinks[i].dataValues.drinkId
      }
    })
    console.log(drinkInfo)
    console.log(drinkInfo[0].dataValues)

    usersDrinks.push(drinkInfo[0].dataValues)
    console.log(usersDrinks)
  }
  
  res.render('saved-cocktails', {usersDrinks: usersDrinks});
})


router.get("/:pageName", function (req, res) {
  console.log(req.params.pageName)
  switch(req.params.pageName){
    case  "saved-cocktails":
    break;

    case 'create-party':
      break;

    case 'profile':
      break;

    case 'register':
      break;

    default:
      res.sendFile(path.join(__dirname, '../views/Invitations/' + req.params.pageName + '.html'));
  }
});

router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router;