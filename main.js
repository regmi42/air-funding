function howto() {
    document.getElementById("How").classList.toggle("show");
  }
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
      {
        loop:true,
        autoplay:true,
        animateOut: 'fadeOut',
        items:1
      }
    );
  });