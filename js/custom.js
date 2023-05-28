
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([ 
      // HERE ARE THE NEW HERO IMAGES
      "hero3.jpg", 
      "hero2.jpg",
      "hero4.jpg"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


