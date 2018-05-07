var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
var opinionIndex = 0;
showOpinion();

function showOpinion() {
    var i;
    var opinion = document.getElementsByClassName("opinion__item");
    var opiniondot = document.getElementsByClassName("opinion__dot");
    for (i = 0; i < opinion.length; i++) {
       opinion[i].style.display = "none";
    }
    opinionIndex++;
    if (opinionIndex > opinion.length) {opinionIndex = 1}
    for (i = 0; i < opiniondot.length; i++) {
        opiniondot[i].className = opiniondot[i].className.replace(" opinion__dot--active", "");
    }
    opinion[opinionIndex-1].style.display = "block";
    opiniondot[opinionIndex-1].className += " opinion__dot--active";
    setTimeout(showOpinion, 2000); // Change image every 2 seconds
}
