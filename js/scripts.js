$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $("#infoToggleWalrus").click(function() {
    $("#walrusInfo").fadeIn();  
  });
  
  $(".click").click(function() {
    $("#whale-showing").fadeToggle();
    $("#whale-hidden").fadeToggle();
  });
  $("#infoToggleWhale").click(function() {
    $("#whaleInfo").fadeIn();
  });
});
