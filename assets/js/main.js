$(document).ready(function () {
  var navbar_height = $(".navbar").outerHeight();
  $(".navbar-spacer").css("padding-top", navbar_height);

  AOS.init();
});
