// $( document ).ready(function() {
//   var testimonialsIndex = 0;
//   showtestimonials();
//
//   function showtestimonials() {
//       var i;
//       var testimonials = document.getElementsByClassName("testimonials__item");
//       var testimonialsdot = document.getElementsByClassName("testimonials__dot");
//       for (i = 0; i < testimonials.length; i++) {
//          testimonials[i].style.display = "none";
//       }
//       testimonialsIndex++;
//       if (testimonialsIndex > testimonials.length) {testimonialsIndex = 1}
//       for (i = 0; i < testimonialsdot.length; i++) {
//           testimonialsdot[i].className = testimonialsdot[i].className.replace(" testimonials__dot--active", "");
//       }
//       testimonials[testimonialsIndex-1].style.display = "flex";
//       testimonialsdot[testimonialsIndex-1].className += " testimonials__dot--active";
//       setTimeout(showtestimonials, 2000); // Change image every 2 seconds
//   }
// });
// // 
