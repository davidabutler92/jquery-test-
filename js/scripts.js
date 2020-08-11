$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();

  });
  $(".click").click(function() {
    $("#whale-showing").fadeToggle();
    $("#whale-hidden").fadeToggle();
  });
  $("#black").click(function() {
    $(".body").toggle();
  });
});