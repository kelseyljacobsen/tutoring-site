$(document).ready(function () {

  $("#ab").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $("#about").offset().top
    }, 800);
  });

  $("#success").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $("#successes").offset().top
    }, 800);
  });

  $("#con").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $("#contact").offset().top
    }, 800);
  });

});