/*Project Requirements:
Must use a Node and Express web server - DONE
Must be backed by a MySQL database with a Sequelize ORM - DONE
Must have both GET and POST routes for retrieving and adding new data - DONE
Must be deployed using Heroku (with data) - WORKING
Must utilize at least one new library, package or technology that we haven't discussed - WORKING
Must have a plished front end/UI - WORKING
Must have a folder structure that meets the MVC paradigm -- DONE
Must user Handlebars for server-side templating - WORKING
Must meet good-quality coding standards (indentation, scoping, naming, etc.)
Must protect API keys in Node with environement variables - WORKING
*/

// For some reason, password won't convert to bcrypt when registering.

// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
var nodemon = require("nodemon");
//const dotenv = require('dotenv');
const path = require('path');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

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

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.engine('.handlebars', hbs({extname: '.handlebars'}))
app.set("view engine", "handlebars");
// app.set('view engine', '.handlebars');

//Makes html public view, and accesses database and protects it
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

// We need to use sessions to keep track of our user's login status
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Requiring our routes
//require("./routes/")(app);
//require("./routes/")(app);
app.use('/', require('./routes/pages.js'));
app.use('/auth', require('./routes/auth'));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});