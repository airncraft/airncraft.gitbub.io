var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainNav").style.display = "block";
  document.getElementById("headSec").style.display = "block";
  document.getElementById("about").style.display = "block";
document.getElementById("services").style.display = "block";
  document.getElementById("portfolio1").style.display = "block";
  document.getElementById("story").style.display = "block";
document.getElementById("contact").style.display = "block";
document.getElementById("footer").style.display = "block";
}