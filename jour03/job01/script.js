$(document).ready(() => {
  // By default, hide the message
  $('#message').hide();

  // Shows the message when the show button is clicked
  $('#btnShowMessage').click(() => {
    $('#message').show();
  });

  // Hides the message when the hide button is clicked
  $('#btnHideMessage').click(() => {
    $('#message').hide();
  });
});
