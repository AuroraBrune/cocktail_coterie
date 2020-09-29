$(document).ready(function () {
  // When the signup button is clicked, we validate the email and password are not blank
  $('#signup').on('click', function (event) {
    event.preventDefault();

    let user = {
      firstName: $('#firstName').val().trim(),
      lastName: $('#lastName').val().trim(),
      email: $('#emailRegister').val().trim(),
      password: $('#passwordRegister').val().trim(),
      zoomLink: $('#zoom').val().trim(),
    };

    if (!user.email || !user.password) {
      return;
    }

    else {
      $.ajax({
        url: '/api/signup',
        method: 'POST',
        data: user,
      }).then(function (userId) {
        window.location.replace('/profile/' + userId);
      }).catch(function (err) {
        $('#alert .msg').text(err.responseJSON);
        $('#alert').fadeIn(500);
      });
    }
  });
});