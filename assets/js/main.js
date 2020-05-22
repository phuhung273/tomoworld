$(document).ready(function () {
  var header_height = $(".header").outerHeight();
  $(".header-spacer").css("padding-top", header_height);

  AOS.init();

  scroll_top_button = $(".btn-scroll-top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scroll_top_button.css("display", "block");
    } else {
      scroll_top_button.css("display", "none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
