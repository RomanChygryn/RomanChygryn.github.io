$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.scroll__btn--arrow').addClass('animated bounce infinite');
  // $('.hero__title').addClass('animated slideInLeft');
  // $('.hero__subtitle').addClass('animated slideInRight');

  $('.form__content__btn').on( "click", function(event) {
      event.preventDefault();
  });



  $('#contentBtnFirst').on( "click", function(event) {
      event.preventDefault();
      $('#newsModalFirst').fadeIn(500);
  });
  $('#contentBtnSecond').on( "click", function(event) {
      event.preventDefault();
      $('#newsModalSecond').fadeIn(500);
  });

  $('.news__modal__btn').on( "click", function(event) {
      event.preventDefault();
      $('.news__modal').fadeOut(500);

  });

});
