$(document).ready(function(){
	"use strict";

    $(window).on('scroll',function () {
        if ($(this).scrollTop() > 300) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });
    $('.return-to-top').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 1500);
    return false;
    });

    $(window).load(function(){
        $(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
        $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
    });

    $(window).load(function(){
        $(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
        $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
    });

    $("#new-cars-carousel").owlCarousel({
        items: 1,
        autoplay:true,
        loop: true,
        dots:true,
        mouseDrag:true,
        nav:false,
        smartSpeed:1000,
        transitionStyle:"fade",
        animateIn: 'fadeIn',
        animateOut: 'fadeOutLeft'
    });

    var owl=$('.testimonial-carousel');
    owl.owlCarousel({
        items:3,
        margin:0,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        dots:false,
        autoplayHoverPause:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            640:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $('.brand-item').owlCarousel({
        items:6,
        loop:true,
        smartSpeed: 1000,
        autoplay:true,
        dots:false,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:2
            },
            415:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});
$(document).ready(function() {
    "use strict";

    // Existing code...

    // GSAP and ScrollMagic animation for the "newest cars" text
    var controller = new ScrollMagic.Controller();

    var tween = gsap.from("#animate1", {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "power4.out"
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#animate1",
        triggerHook: 0.8,  // Trigger when the element is 80% from the top of the viewport
        reverse: false     // Do not reverse animation when scrolling back up
    })
    .setTween(tween)
    .addTo(controller);
});
$(document).ready(function() {
    "use strict";

    // Existing code...

    // GSAP and ScrollMagic animation for the "newest cars" text
    var controller = new ScrollMagic.Controller();

    var tween = gsap.from("#animate2", {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "power4.out"
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#animate2",
        triggerHook: 0.8,  // Trigger when the element is 80% from the top of the viewport
        reverse: false     // Do not reverse animation when scrolling back up
    })
    .setTween(tween)
    .addTo(controller);
});
$(document).ready(function() {
    "use strict";

    // Existing code...

    // GSAP and ScrollMagic animation for the "newest cars" text
    var controller = new ScrollMagic.Controller();

    var tween = gsap.from("#animate3", {
        duration: 1,
        x: -200,
        opacity: 0,
        ease: "power4.out"
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: "#animate3",
        triggerHook: 0.8,  // Trigger when the element is 80% from the top of the viewport
        reverse: false     // Do not reverse animation when scrolling back up
    })
    .setTween(tween)
    .addTo(controller);
});