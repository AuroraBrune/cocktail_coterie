

//***************************HOMEWORK FILE


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
    console.log("loginListener")

    loginBtn.on("click", function (event) {
      event.preventDefault();
      console.log("onclick")

      let passwordInput = $("#password-popup").val();
      let emailInput = $("#email-popup").val();

      console.log(emailInput)
      console.log(passwordInput)

      let userData = {
        email: emailInput,
        password: passwordInput
      };

      console.log(userData)

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
    console.log("hit")
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function (id) {
        console.log(id)
        window.location.replace("/profile")
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
