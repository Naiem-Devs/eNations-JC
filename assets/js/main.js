(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header-area').addClass("sticky");
      }
      else{
        $('.header-area').removeClass("sticky");
      }
    });


    $(document).ready(function() {
      $('#youtube').magnificPopup({
          type: 'iframe'
      });
  });

  // owlCarousel
  $(".Structure_slider").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 300,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        stagePadding: 80,
        items: 1
      },
      500: {
        stagePadding: 120,
        items: 1
      },
      767: {
        stagePadding: 200,
        items: 1
      },
      830: {
        stagePadding: 240,
        items: 1
      },
      900: {
        stagePadding: 240,
        items: 1
      },
      992: {
        stagePadding: 200,
        items: 2
      },
      1100: {
        stagePadding: 230,
        items: 2
      },
      1200: {
        stagePadding: 250,
        items: 2
      },
      1350: {
        stagePadding: 210,
        items: 3
      },
      1450: {
        stagePadding: 230,
        items: 3
      },
      1600: {
        stagePadding: 280,
        items: 3
      }
    }
  });


  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="300" 


  var navBtn = document.querySelectorAll('.menu-area nav ul li a')
  navBtn.forEach(navBtns => {
      navBtns.addEventListener('click', (e) => {
          navBtnRemove()
          navBtns.classList.add('active')
      })
  })
  function navBtnRemove() {
      navBtn.forEach(navBtns => {
          navBtns.classList.remove('active')
      })
  }
 
})(jQuery);
