
$(document).ready(function () {
  // Getting references to our form and inputs
  let loginNav = $("#loginNav")

  loginNav.on("click", function (event) {
      event.preventDefault();

      let loginBtn = $("#popupBtn");
      loginListener(loginBtn)
  })

  // When the form is submitted, we validate there's an email and password entered
  function loginListener(loginBtn) {

    loginBtn.on("click", function (event) {
      event.preventDefault();

      let passwordInput = $("#password-popup").val();
      let emailInput = $("#email-popup").val();

      let userData = {
        email: emailInput,
        password: passwordInput
      };

      if (!userData.email || !userData.password) {
        return;
      }

      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      $("#email-popup").val("");
      $("#password-popup").val("");
    });
  }

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })

      .then(function (id) {
        window.location.replace("/profile")
      })
      
      .catch(function (err) {
        console.log(err);
      });
  }
});
