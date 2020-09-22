

//***************************HOMEWORK FILE

$(document).ready(function () {
  // Getting references to our form and input
  let signUpForm = $("#signup");
  let firstName = $("input#firstName");
  let lastName = $("input#lastName");
  let emailInput = $("input#email");
  let passwordInput = $("input#password");
  // How to work in {{>personal-info}} information?
  //let zoomInput = $("input#zoom");
  


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    let userData = {
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
      password: password, 
      firstName: firstName,
      lastName: lastName
    })
      .then(function(data) {
        window.location.replace("/profile");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
