$('.tab').on( "click", function() {
  $(this).find('.dropdown').slideToggle(1000);
});

// $('.dropdown__button2').on( "click", function() {
//   $('.dropdown2').slideToggle();
// });
// $('.dropdown__button3').on( "click", function() {
//   $('.dropdown3').slideToggle();
// });
// $('.dropdown__button4').on( "click", function() {
//   $('.dropdown4').slideToggle();
// });

// $('#svg__test').on( "click", function() {
//   $(this).toggleClass(' active');
// });

$('.showMore').on( "click", function() {
  $('.modal').toggleClass("modal--active");
  $('.hide').css('display', 'block');
});
$('.hide').on( "click", function() {
  $('.modal').toggleClass("modal--active");
  $('.hide').css('display', 'none');
});
