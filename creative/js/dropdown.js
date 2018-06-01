
$(document).ready(function() {
	$(function(){
		$('#nav-toggle').click(function(){
			$(this).toggleClass("active");
			$('#navbar').toggleClass('nav nav--mobile');
			$('#social__bar').toggleClass('navbar__social--mobile');
		})
	})

	$(function(){
		$('.nav__item').click(function(){
			$('#navbar').addClass('nav').removeClass('nav--mobile');
			$('#nav-toggle').toggleClass('active');
			$('#social__bar').addClass('navbar__social').removeClass('navbar__social--mobile');
		})
	})

	$(function(){
		$('.social__item').click(function(){
			$('#navbar').addClass('nav').removeClass('nav--mobile');
			$('#nav-toggle').toggleClass('active');
			$('#social__bar').addClass('navbar__social').removeClass('navbar__social--mobile');
		})
	})
});
