

var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");

// pehle saare text chhupa do
function saaretexthatao() {
  hometext.style.display = "none";
  abouttext.style.display = "none";
  contacttext.style.display = "none";
}

// default me sirf home dikhaye
saaretexthatao();
hometext.style.display = "block";
hometext.style.width = "60%";

home.addEventListener("click", function () {
  saaretexthatao();
  hometext.style.display = "block";
  hometext.style.width = "60%";
});

about.addEventListener("click", function () {
  saaretexthatao();
  abouttext.style.display = "block";
  abouttext.style.width = "60%";
});

contact.addEventListener("click", function () {
  saaretexthatao();
  contacttext.style.display = "block";
  contacttext.style.width = "60%";
});
