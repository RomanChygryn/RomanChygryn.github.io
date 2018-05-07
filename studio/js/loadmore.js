// var hidden = document.getElementById("galleryHidden");
//
// function loadMore() {
//   if (hidden.className === "gallery__hidden") {
//       hidden.className = "gallery__hidden--active";
//   } else {
//       hidden.className = "gallery__hidden";
//   }
// };
$('.load__button').on('click', function() {
  $('.dropdown').slideToggle();
});
