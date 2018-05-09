// Set the date we're counting down to
var countDownDate = new Date("Apr 18, 2019 09:54:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("clockDay").innerHTML = days + "d";
  document.getElementById("clockHour").innerHTML = hours + "h";
  document.getElementById("clockMinute").innerHTML = minutes + "m";
  document.getElementById("clockSecond").innerHTML = seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    // clearInterval(x);
    document.getElementById("timerTitle").innerHTML = "ICO started:";
  }
}, 1000);
