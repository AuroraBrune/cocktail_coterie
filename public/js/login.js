

//***************************HOMEWORK FILE


<<<<<<< HEAD
$(document).ready(function() {
=======
$(document).ready(function () {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
<<<<<<< HEAD
  loginForm.on("submit", function(event) {
=======
  loginForm.on("submit", function (event) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
<<<<<<< HEAD
      .then(function() {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function(err) {
=======
      .then(function () {
        window.location.replace("/profile");
      })
      .catch(function (err) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
        console.log(err);
      });
  }
});
