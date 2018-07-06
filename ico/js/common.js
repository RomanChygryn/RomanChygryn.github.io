$('.slick-carousel-basic').slick({

    slidesToShow: 4,
    slidesToScroll: 0,
    speed : 600,
    ease : 'easeIn',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(function() {

var target = $('video').not('[autoplay="autoplay"]'), zenith, nadir;

$(window).on('load resize', storeDimensions).scroll($.restrain(100, checkPlay));

storeDimensions();

target.each(function() {

  if (this.readyState > 2) initControl(this);
  else $(this).on('loadeddata', initControl(this));

  $(this).on('ended', function() {
    $(this).next().find('.flow').removeClass('active');
  });
});

$('.sound').click(function() {

  var media = $(this).parent().prev();

  if (media[0].muted) {
  media[0].muted = false;
  $(this).addClass('active');
  }
  else {
  media[0].muted = true;
  $(this).removeClass('active');
  }
});

$('.flow').click(function() {

  var media = $(this).parent().prev();

  media.addClass('managed');

  if (media[0].busy) {
  media[0].pause();
  $(this).removeClass('active');
  }
  else {
  media[0].play();
  $(this).addClass('active');
  }
});

function initControl(aim) {

  $(aim).addClass('deft').next().find('button').show();
}

function storeDimensions() {

  zenith = []; nadir = [];

  target.each(function() {

    var placement = $(this).offset().top,
    size = $(this).height();

    zenith.push(placement-$(window).height()*0.9+size);
    nadir.push(placement+size*0.1);
  });
}

function checkPlay() {

  var spot = $(window).scrollTop();

  target.each(function(i) {

    if (!$(this).hasClass('deft') || (!this.busy && $(this).hasClass('managed'))) return;

    var panel = $(this).next().find('.flow');

    if (spot > zenith[i] && spot < nadir[i]) {
    if (this.busy) return;
    this.play();
    panel.addClass('active');
    }
    else {
    if (this.paused) return;
    this.pause();
    panel.removeClass('active');
    }
  });
}
});

Object.defineProperty(HTMLMediaElement.prototype, 'busy', {
  get: function() {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
});

$.restrain = function(delay, callback) {

  var executed = 0, debounce,
  throttle = function() {

  var elapsed = Math.min(delay, Date.now()-executed),
  remain = delay-elapsed;
  debounce && clearTimeout(debounce);
  elapsed == delay && runIt();
  if (remain) debounce = setTimeout(runIt, remain);

  function runIt() {
  executed = Date.now();
  callback.apply(this, arguments);
  }
  }
  return throttle;
}
