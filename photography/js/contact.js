$('#send').on('click', () => { //validates all field inputs are filled and includes a valid email address
  let formValid = true;

  $('#errorMsg').empty();
  $('.error').removeClass('error');
  $('#msgInp')[0].style.backgroundColor = "white";

  let validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if ($('#nameInp').val() === '') {
    $('#nameInp').addClass('error');

    formValid = false;

  } if (!validEmailRegex.test($('#emailInp').val())) {
    $('#errorMsg').append("Please include a valid email");
    $('#emailInp').addClass('error');

    formValid = false;

  } if ($('#subjectInp').val() === '') {
    $('#subjectInp').addClass('error');

    formValid = false;

  } if ($('#msgInp').val() === '') {
    $('#msgInp').addClass('error');
    $('#msgInp')[0].style.backgroundColor = "#ff6d6d";

    formValid = false;

  } else if (formValid) {
    $('#send')[0].style.opacity = "0";

    $.ajax({
      url: "https://5bstnxh46j.execute-api.us-west-2.amazonaws.com/dev/contact",
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      data: JSON.stringify({
        "name": $('#nameInp').val(),
        "email": $('#emailInp').val(),
        "subject": $('#subjectInp').val() + " (Photography)",
        "message": $('#msgInp').val()
      })
    })
    .done((response) => {
      $('#hideSubmit').fadeTo(500, 0, () => {
        $('#showSubmit')[0].style.zIndex = "2";
        $('#showSubmit')[0].style.opacity = "1";
      });
    })
    .fail((err) => { //show error page
      $('#hideSubmit').fadeTo(500, 0, () => {
        $('#showFail')[0].style.zIndex = "2";
        $('#showFail')[0].style.opacity = "1";
      });
    })

  }

})