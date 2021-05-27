// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
}



// preloader
$(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(200).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });