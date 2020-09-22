var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
<<<<<<< HEAD
  function(email, password, done) {
=======
  function (email, password, done) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
    db.User.findOne({
      where: {
        email: email
      }
<<<<<<< HEAD
    }).then(function(dbUser) {
=======
    }).then(function (dbUser) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
<<<<<<< HEAD
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
=======
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
  cb(null, obj);
});

module.exports = passport;
