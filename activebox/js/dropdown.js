  var x = document.getElementById("navbar"),
      button = document.getElementById('nav-toggle');


function buttonChange() {
  button.classList.toggle("active");
    if (x.className === "nav") {
        x.className = "nav--mobile ";
    } else {
        x.className = "nav";
    }
};
$(function(){
		$('.nav__item').click(function(){
			$('#navbar').addClass('nav').removeClass('nav--mobile');
      $('#nav-toggle').toggleClass('active');
		})
	})
