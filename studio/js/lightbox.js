
$('.overlay').on('click', function(){
  $(this).hide();
});
$('.gallery__item').mouseover(function(){
  $('.overlay').show();
});


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "flex";
}


// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var modal = document.getElementById('myModal');
var imageIndex = 1;
showLightbox(imageIndex);

// Next/previous controls
function plusimages(n) {
  showLightbox(imageIndex += n);
}

function currentSlide(n) {
  showLightbox(imageIndex = n);
}

function showLightbox(n) {
  var i;
  var images = document.getElementsByClassName("myimages");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > images.length) {imageIndex = 1}
  if (n < 1) {imageIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[imageIndex-1].style.display = "block";
  dots[imageIndex-1].className += " active";
  captionText.innerHTML = dots[imageIndex-1].alt;
}
