$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $(".click").click(function() {
    $("#whale-showing").toggle();
    $("#whale-hidden").toggle();
  });
});
