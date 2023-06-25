var weddingDate = "July 22, 2023 19:00:00";

$(document).ready(function() {
  $('body').addClass('homeOpened');
  countdownTimerInit();
  logoCenter();
  
  
  $('.openHomePage').click(function(e){
    e.preventDefault();
    $('.homepage').addClass('homeOpened');
    $('body').removeClass('homeOpened');
  });
  
  $('.goHome').click(function(e){
    e.preventDefault();
     $('.homepage').removeClass('homeOpened');
    $('body').addClass('homeOpened');
 
  });
  
   $('.menuToggle i').click(function(e){
    e.preventDefault();
    $('.menuToggle').toggleClass('opened');
     $('nav').toggleClass('opened');
  });
  
   $('nav a').click(function(e){
    e.preventDefault();
      $('.menuToggle').toggleClass('opened');
     $('nav').toggleClass('opened');
  });
  
   $('.accordian .trigger').click(function(e){
    e.preventDefault();
      $(this).parent('.accordian').toggleClass('opened');

  });
  
  
});

var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

  logoCenter();
            
  }, 250);
});

function countdownTimerInit() {
  var todaysDate = new Date();
  var todaysTime = todaysDate.getTime();

  var target_date = new Date(weddingDate).getTime();

  var countdownTimer = new Vue({
    el: "#countdownTimer",
    data: {
      countdown_days: "",
      countdown_hours: "",
      countdown_min: "",
      countdown_sec: ""
    }
  });

  var years, days, hours, minutes, seconds;
  setInterval(function() {
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    countdownTimer.countdown_days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    countdownTimer.countdown_hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    countdownTimer.countdown_min = parseInt(seconds_left / 60);
    countdownTimer.countdown_sec = parseInt(seconds_left % 60);
  }, 1000);

  return;
}

function logoCenter(){
  var logoHeight = $('.weddingLogo').height();
  var pageHeight = $(window).height();
  
  var marginPushT = (pageHeight/2)-(logoHeight/2);
  $('.weddingLogo').css('margin-top',marginPushT+'px');
  
   var logoWidth = $('.weddingLogo').width();
  var pageWidth = $(window).width()/2;
  
  var marginPushL = (pageWidth/2)-(logoWidth/2);
  $('.weddingLogo').css('margin-left',marginPushL+'px');
  
}


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });