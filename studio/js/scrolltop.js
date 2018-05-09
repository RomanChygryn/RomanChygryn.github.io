$( document ).ready(function() {
  $(window).scroll(function(){
    const $aboutSection = $('.about');
    const $aboutOffset = $aboutSection.offset().top;
    const $scrollTop = $('.scroll-top');

    if($(this).scrollTop()>=$aboutOffset){
      $(function(){
        $scrollTop.show(500);
      });
    } else {
        $scrollTop.hide(500);
    }
  });
});
