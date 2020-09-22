

//***************************HOMEWORK FILE

<<<<<<< HEAD
$(document).ready(function() {
=======
$(document).ready(function () {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var firstName = $("input#firstName");
  var lastName = $("input#lastName");
  var emailInput = $("input#email");
  var passwordInput = $("input#password");
<<<<<<< HEAD
 // How to work in {{>personal-info}} information?
  
 
  
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
=======
  // How to work in {{>personal-info}} information?



  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // Minimum data necessary
    signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
<<<<<<< HEAD
      password: password, 
      firstName: firstName,
      lastName: lastName
    })
      .then(function(data) {
=======
      password: password,
      firstName: firstName,
      lastName: lastName
    })
      .then(function () {
>>>>>>> 241ee2abd7aa20ff22b28a67de924576dbb7fc7f
        window.location.replace("/members");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
