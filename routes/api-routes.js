const passport = require('../config/passport');
const db = require('../models');
const express = require('express');
const router = express.Router();
const path = require('path');

// Create user
router.post('/api/signup', async function (req, res, cb) {
  let user = await db.User.findOrCreate({
    where: {email: req.body.email},
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


// Log the user out
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Save a drink
router.post('/api/save-drink', async function (req, res) {
  let drink = await db.Drink.findOrCreate({
    // idDrink is the cocktail db id for the drink
    where: {idDrink: req.body.drink.idDrink},
    defaults: req.body.drink,
  });
  if (Array.isArray(drink)) drink = drink[0];
  drink = drink.dataValues;
  // if there's an authenticated user store saved drinks
  const user = req.user;
  if (!user) return res.json({status: 'success'});
  // save the user's drink request
  const savedDrink = await db.SavedDrink.findOrCreate({
    where: {drinkId: drink.id, userId: user.id},
    defaults: {drinkId: drink.id, userId: user.id},
  });
  return res.json({status: 'success'});
})

router.post('/api/writeInvitation', function (req, res) {
  const fs = require('fs');
  const util = require('util');

  // changes fs.writeFile into a promise oriented object
  const writeFileAsync = util.promisify(fs.writeFile);
  console.log(req.body);
  let { email, name, cocktailName, date, time, description, zoom } = req.body;
  // use email to get user id
  let pageName = email.split('@')[0] + '-' + name;
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
		<link rel="icon" href="images/favicon.ico" alt = "logo"><br>
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

    
      <div class="col-2"></div>
      <div class="col-lg-8"><p class="interior-box">${description}</p></div>
      <div class="col-2"></div>
    

    
      <div class="col-lg-12"><h3 class="interior-box">Cocktail: ${cocktailName}</h3></div>
    

    
      <div class="col-lg-6"><p class="interior-box">Time: ${time}</p></div>
      <div class="col-lg-6"><p class="interior-box">Date: ${date}</p></div>
    
      <div class="col-lg-12"><p class="interior-box">Zoom-Link: <a style="color:white" href=${zoom}>${zoom}</a></p></div>
    </div>

  </div>
</div>
    
</body>
</html>`
  ).then(function (err) {
    if (err) res.json(err);
    res.json(pageName);
  });
});

module.exports = router;