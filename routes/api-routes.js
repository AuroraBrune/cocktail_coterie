const passport = require('../config/passport');
const db = require('../models');
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const util = require('util');

const axios = require('axios');
const { response } = require('express');

// Create user
router.post('/api/signup', async function (req, res, cb) {

  let user = await db.User.findOrCreate({
    where: { email: req.body.email },
    defaults: req.body,
  })
  cb();

  if (Array.isArray(user)) user = user[0];
  // use passport's req.login function to log the user in -- creates req.user
  req.login(user, function (err) {
    if (!err) {
      res.json(user.dataValues.id);
    }
  })
});

// Log the user in with passport -- creates req.user
router.post('/api/login', passport.authenticate('local'), async function (req, res, cb) {

  const dbUser = await db.User.findOne({
    where: {
      email: req.body.email,
    },
  });
  cb();
  res.json(dbUser.id);
});

// Cocktail API/Search: Drink
router.get('/cocktailsdb/drinks/:drink', function (req, res) {
  const drink = req.params.drink;
  let queryURL = 'https://www.thecocktaildb.com/api/json/v2/' + process.env.API_KEY + '/search.php?s=' + drink;
  axios.get(queryURL).then((data) => {
    res.json(data.data);
  });
})

// Cocktail API/Search: Ingredient
router.get('/cocktailsdb/drinks/:ingredient', function (req, res) {
  const ingredient = req.params.ingredient;
  let queryURL = 'https://www.thecocktaildb.com/api/json/v2/' + process.env.API_KEY + '/search.php?s=' + ingredient;
  axios.get(queryURL).then((data) => {
    res.json(data.data);
  });
})

// Log the user out
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Save a drink
router.post('/api/save-drink', async function (req, res) {

  let drink = await db.Drink.findOrCreate({
    // idDrink is the cocktail db id for the drink
    where: { idDrink: req.body.drink.idDrink },
    defaults: req.body.drink,
  });

  if (Array.isArray(drink)) drink = drink[0];
  drink = drink.dataValues;
  // if there's an authenticated user store saved drinks
  const user = req.user;

  if (!user) return res.json({ status: 'success' });

  // save the user's drink request
  const savedDrink = await db.SavedDrink.findOrCreate({
    where: { drinkId: drink.id, userId: user.id },
    defaults: { drinkId: drink.id, userId: user.id },
  });

  return res.json({ status: 'success' });
})

router.post('/api/cocktailChoice/:drinkId', async function (req, res) {
  let drinkInfo = await db.Drink.findAll({

    where: {
      id: req.params.drinkId
    }
  })
  res.json(drinkInfo[0].dataValues)
})
router.post('/api/writeInvitation', async function (req, res) {
  let { email, name, drinkId, date, time, description, zoom } = req.body;
  let pageName = email.split('@')[0] + '-' + name;
  let drink;
  try {
    drink = await db.Drink.findOne({
      where: { id: parseInt(drinkId) },
    })
  } catch {
    drink = {}
  }

  let ingredientString = '';
  for (let i = 0; i < 20; i++) {
    if (drink['strMeasure' + i]) {
      if (i > 1) ingredientString += '<br/>';
      ingredientString += drink['strMeasure' + i] + drink['strIngredient' + i];
    }
  }

  console.log(drink);
  // use email to get user id
  const writeFileAsync = util.promisify(fs.writeFile);
  writeFileAsync(
    './views/Invitations/' + pageName + '.html',
    `<!DOCTYPE html>
<html lang="en">
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--brings in bootstrap and the jquery bootstrap requires-->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
		<!-- google fonts-->
		<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
		<!--personal css-->
		<link rel="stylesheet" href="/css/style.css" />
		<!--tab icon -->
		<link rel="icon" href="/images/favicon.ico" alt = "logo"><br>
    <title>${name}</title>
  </head>
  <body>
  <header>
    <h1 id="title">Via Cocktail_Coterie</h1>
    <br>
    <pre>You are Cordially Invited To...</pre>
</header>
  <div class="container">
  <div class="row">
    <div class="col-lg-12">
      <h1 class="interior-box">${name}</h1>
    </div>
    
      <div class="col-lg-1"></div>
      <div class="col-lg-10"><p class="interior-box">${description}</p></div>
      <div class="col-lg-1"></div>

      <div class="col-lg-1"></div>
      <div class="col-lg-10">
      <div class="interior-box">
      <h3>Cocktail: ${drink.strDrink}</h3>
      <img src=${drink.strDrinkThumb} class="cocktailImg">
      <br>${ingredientString}
      <br>${drink.strInstructions}
      </div>
      </div>
      <div class="col-lg-1"></div>

      <div class="col-lg-1"></div>
      <div class="col-lg-5"><p class="interior-box">Time: ${time}</p></div>
      <div class="col-lg-5"><p class="interior-box">Date: ${date}</p></div>
      <div class="col-lg-1"></div>

      <div class="col-lg-1"></div>
      <div class="col-lg-10"><p class="interior-box">Zoom-Link: <a style="color:white" href=${zoom}>${zoom}</a></p></div>
      <div class="col-lg-1"></div>
    </div>

  </div>
</div>
    
</body>
</html>`
  ).then(function (err) {
    if (err) res.json(err);
    console.log(pageName)
    res.json(pageName);
  });
});

module.exports = router;