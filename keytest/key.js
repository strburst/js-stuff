$(function() {
  $('body').keydown(function(event) {
    console.log('keydown event', event.which);
  });
  $('body').keyup(function(event) {
    console.log('keyup event', event.which);
  });
  $('body').keypress(function(event) {
    console.log('keypress event', event.which);
    $(this).append(String.fromCharCode(event.which));
  });
  $('h1').click(function(event) {
    console.log('click event:', event);
  });
});
