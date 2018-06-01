$( document ).ready(function() {
  $(window).scroll(function(){
    const $featuresSection = $('.features');
    const $featuresOffset = $featuresSection.offset().top;
    const $scrollTop = $('.scroll-top');

    if($(this).scrollTop()>=$featuresOffset){
      $(function(){
        $scrollTop.show(500);
      });
    } else {
        $scrollTop.hide(500);
    }
  });

  $('.scroll-top').click(function() {
    $(window).scrollTop(0);
  });
});
