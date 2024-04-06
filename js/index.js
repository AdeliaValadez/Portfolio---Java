document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
    navbarTogglerIcon.classList.toggle('open');
    console.log("Navbar toggler clicked.");
  });
});

$(document).ready(function(){
  $("#skill1").click(function(){
    $("#info-row").html("Recognizes and nurtures the potential in others, serving as a supportive mentor.").show();
  });

  $("#skill2").click(function(){
    $("#info-row").html("Flexibly embraces change, thriving in dynamic environment").show();
  });

  $("#skill3").click(function(){
    $("#info-row").html("Efficiently orchestrates tasks and resources, adept at coordination.").show();
  });

  $("#skill4").click(function(){
    $("#info-row").html("Ensures everyone feels welcome and valued, fostering inclusivity.").show();
  });

  $("#skill5").click(function(){
    $("#info-row").html("Forms deep, meaningful connections, prioritizing genuine relationships.").show();
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const carouselImages = $('.carousel-slide li');
  const totalImages = carouselImages.length;
  let currentIndex = 0;

  /**** Start the carousel animation ****/
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 2000); /**** Change the interval between transitions (in milliseconds) ****/

  function updateCarousel() {
    /*****  Fade out the previously displayed word *****/
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    carouselImages.removeClass('prev active next');
    $(carouselImages[prevIndex]).addClass('prev');
    $(carouselImages[prevIndex]).css({
      'transition-delay': '0s',
      'transition-duration': '1s' /***** Longer duration for fade-out *****/
    });
    setTimeout(() => {
      $(carouselImages[prevIndex]).css('transition-delay', '1s');
    }, 10);

    /**** Fade in the next word ****/
    $(carouselImages[currentIndex]).addClass('active');
    $(carouselImages[currentIndex]).css('transition-delay', '1s');
    $(carouselImages[(currentIndex + 1) % totalImages]).addClass('next');
  }
});