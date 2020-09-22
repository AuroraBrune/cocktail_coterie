// This is middleware for restricting routes a user is not allowed to visit if not logged in
//Error when else was used... why?
//user.js
<<<<<<< HEAD
module.exports = function(req, res, next) {
=======
module.exports = function (req, res, next) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
  if (req.user) {
    return next();
  }
  return res.redirect("/");
};
