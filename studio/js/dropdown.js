  var x = document.getElementById("navbar"),
      button = document.getElementById('nav-toggle');


function buttonChange() {
  button.classList.toggle("active");
    if (x.className === "nav__navbar") {
        x.className += " nav__navbar--mobile ";
    } else {
        x.className = "nav__navbar";
    }
};
$(function(){
		$('.navbar__item').click(function(){
			$('#navbar').removeClass('nav__navbar--mobile');
      $('#nav-toggle').toggleClass('active');
		})
	})
