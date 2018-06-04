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



  $(window).scroll(function(){
    const $featureSection = $('#features');
    const $featureOffset = $featureSection.offset().top - 600;

    if($(this).scrollTop()>=$featureOffset){
      $('.features__title').css('opacity', '1');
      $('.features__item').css('opacity', '1');
    }
  });

  $(window).scroll(function(){
    const $newsSection = $('#news');
    const $newsOffset = $newsSection.offset().top - 600;

    if($(this).scrollTop()>=$newsOffset){
      $('.news__item--first').css('opacity', '1');
      $('.news__item--second').css('opacity', '1');
    }
  });



  $(window).scroll(function(){
    const $promoSection = $('#promo');
    const $promoOffset = $promoSection.offset().top - 600;

    if($(this).scrollTop()>=$promoOffset){
      $('#promoRight').css('opacity', '1');
      $('#promoLeft').css('opacity', '1');


    }
  });

  $(window).scroll(function(){
    const $blogSection = $('#blog');
    const $blogOffset = $blogSection.offset().top - 600;

    if($(this).scrollTop()>=$blogOffset){
      $('#blogTitleWrapper').css('opacity', '1');
      $('.blog__subtitle').css('opacity', '1');
      $('.blog__content').css('opacity', '1');
    }
  });


  $(window).scroll(function(){
    const $formSection = $('#contact');
    const $formOffset = $formSection.offset().top - 600;

    if($(this).scrollTop()>=$formOffset){
      $('#formTitleWrapper').css('opacity', '1');
      $('.form__content').css('opacity', '1');
    }
  });


  $(window).scroll(function(){
    const $teamSection = $('#team');
    const $teamOffset = $teamSection.offset().top - 600;

    if($(this).scrollTop()>=$teamOffset){
      $('#teamTitleWrapper').css('opacity', '1');
      $('.team__subtitle').css('opacity', '1');
      $('.team__content').css('opacity', '1');
    }
  });


  $(window).scroll(function(){
    const $aboutSection = $('#about');
    const $aboutOffset = $aboutSection.offset().top - 400;

    if($(this).scrollTop()>=$aboutOffset){
      $('.about__hero').css('opacity', '1');
      $('.about__image').css('opacity', '1');

      $('.specs__item--design').css('width', '70%');
      $('.specs__item--design').find('.specs__item__content').css('opacity', '1');

      $('.specs__item--code').css('width', '80%');
      $('.specs__item--code').find('.specs__item__content').css('opacity', '1');

      $('.specs__item--layout').css('width', '90%');
      $('.specs__item--layout').find('.specs__item__content').css('opacity', '1');
    }
  });


});
