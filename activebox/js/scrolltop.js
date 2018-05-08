// $(window).scroll(function(){
//   const $featuresSection = $('.features');
//   const $featuresOffset = $featuresSection.offset().top;
//   const $scrollTop = $('.scroll-top');
//
//   if($(this).scrollTop()>=$featuresOffset){
//     $(function(){
//       $scrollTop.show(500);
//     });
//   } else {
//       $scrollTop.hide(500);
//   }
// });
//
// $('.scroll-top').click(function() {
//   $(window).scrollTop(0);
// });
if ($('.scroll-top').length) {
    var scrollTrigger = 700, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.scroll-top').show(500);
            } else {
                $('.scroll-top').hide(500);
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.scroll-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
