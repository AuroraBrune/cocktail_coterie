/*Project Requirements:
Must use a Node and Express web server
Must be backed by a MySQL database with a Sequelize ORM
Must have both GET and POST routes for retrieving and adding new data
Must be deployed using Heroku (with data)
Must utilize at least one new library, package or technology that we haven't discussed
Must have a plished front end/UI
Must have a folder structure that meets the MVC paradigm -- DONE
Must user Handlebars for server-side templating
Must meet good-quality coding standards (indentation, scoping, naming, etc.)
Must protect API keys in Node with environement variables
*/
// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var nodemon = require("nodemon");
//const dotenv = require('dotenv').config();

// Dotenv files to protect DB examples.
// let dbuev =  process.env.DB_UEV;
// let dialect = process.env.DIALECT;


// Requiring passport as we've configured it
//var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Requiring our routes
//require("./routes/")(app);
//require("./routes/")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});