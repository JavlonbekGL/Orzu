$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:24,
        responsiveClass:true,
        nav:true,
        center:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
    });
});

function countdown(dataEnd) {
    var timer, days, hours, minutes, seconds;

    dataEnd = new Date (dataEnd);
    dataEnd = dataEnd.getTime();

    if(isNaN(dataEnd)){
        return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
        var dataStart = new Date();
        var dataStart = new Date(dataStart.getUTCFullYear(),
         dataStart.getUTCMonth(),
         dataStart.getUTCDate(),
         dataStart.getUTCHours(),
         dataStart.getUTCMinutes(),
         dataStart.getUTCSeconds());
        var timeRemaining = parseInt((dataEnd - dataStart.getTime()) / 1000)

        if (timeRemaining >= 0){
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);

            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hours").innerHTML = parseInt(("0" + hours).slice(-2));
            document.getElementById("minutes").innerHTML = parseInt(("0" + minutes).slice(-2));
            document.getElementById("seconds").innerHTML = parseInt(("0" + seconds).slice(-2));
        }
        else{
            return;
        }
    }

    function display(days, hours, minutes, seconds) {}
}

countdown ('09/07/2023 02:00:00 PM');


var header = document.getElementById("myDiv");

var btns = header.getElementsByClassName("number-rooms");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-box");
      current[0].className = current[0].className.replace(" active-box", "");
      this.className += " active-box";
    });
}


var btnContainer = document.getElementById("accordion");

// Get all buttons with class="btn" inside the container
var buttons = btnContainer.getElementsByClassName("accordion-box");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-accordion-box");
    current[0].className = current[0].className.replace(" active-accordion-box", "");
    this.className += " active-accordion-box";
  });
}


buttons = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttons.style.display = "block";
  } else {
    buttons.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-75px";
//   }
//   prevScrollpos = currentScrollPos;
// }