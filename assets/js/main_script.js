/* ----------------------------------------------------------------------------------------
* Author        : Themefair
* Template Name : Api | App Landing HTML Template
* File          : Api main JS file
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */



    
/* INDEX
----------------------------------------------------------------------------------------

01. Preloader js    

02. change Menu background on scroll js   

03. Navigation js      
 
04. Smooth scroll to anchor 
 
05. Slider carosoul JS   
 
06. Review Js  
  
07. screenshot js 
  
08 . Scroll-to-top
  
09. Magnific Popup js 
   
10. Ajax Contact Form js    
    
11. MailChimp js     

-------------------------------------------------------------------------------------- */

(function($) {
'use strict';

    var api = $(window);

    /*-------------------------------------------------------------------------*
     *                  01. Preloader js                                       *
     *-------------------------------------------------------------------------*/
      api.on( 'load', function(){
        
          $('#preloader').delay(300).fadeOut('slow',function(){
            $(this).remove();
          });    

      }); // $(window).on end
    
    /*-------------------------------------------------------------------------*
     *             02. change Menu background on scroll js                     *
     *-------------------------------------------------------------------------*/
     api.on('scroll', function () {

          var menu_area = $('.menu-area');

          if (api.scrollTop() > 0) {
              menu_area.addClass('sticky-menu');
          } else {
              menu_area.removeClass('sticky-menu');
          }
      }); // $(window).on('scroll' end)

    /*-------------------------------------------------------------------------*
     *                   03. Navigation js                                     *
     *-------------------------------------------------------------------------*/
      $(document).on('click', '.navbar-collapse.in', function (e) {
          if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
              $(this).collapse('hide');
          }
      });

      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

    /*-------------------------------------------------------------------------*
     *                   04. Smooth scroll to anchor                           *
     *-------------------------------------------------------------------------*/
      $('a.smooth_scroll').on("click", function (e) {
          e.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top-50
          }, 1000);
      });


    /*-------------------------------------------------------------------------*
                      05. Slider carosoul JS                       
     *-------------------------------------------------------------------------*/
      $(".slider-carosoul").owlCarousel({
          slideSpeed: 1000,
          paginationSpeed: 500,
          singleItem: true,
          lazyLoad: false,
          pagination: false,
          navigation: true,
          navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'] 

      });  
    
        
    /*-------------------------------------------------------------------------*
                      06. Review Js             
     *-------------------------------------------------------------------------*/
      $(".review-list").owlCarousel({
          slideSpeed: 1000,
          paginationSpeed: 500,
          singleItem: true,
          lazyLoad: false,
          pagination: false,
          navigation: false,
          autoPlay:true
      });

    /*-------------------------------------------------------------------------*
     *              07. screenshot js                                     *
     *-------------------------------------------------------------------------*/
      var mySwiper = new Swiper('.swiper-container', {
          loop: true,
          slidesPerView: 4,
          centeredSlides: true,
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
          effect: 'coverflow',
          coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 299,
              modifier: 1,
              slideShadows: false,
          },

          autoplay: {
              delay: 2500,
              disableOnInteraction: true,
          },
          breakpoints: {

              768: {
                  slidesPerView: 3,
                 
              },
              640: {
                  slidesPerView: 2,
                 
              }
          },
            
      })
	  
      /*-------------------------------------------------------------------------*
     *              08 . Scroll-to-top                           *
     *-------------------------------------------------------------------------*/ 
    api.on('scroll', function () {

        var top_top = $('#scroll-to-top');

        if (api.scrollTop() > 500) {
            top_top.fadeIn();
        } else {
            top_top.fadeOut();
        }
    });
    /*END SCROLL TO TOP*/

    /*-------------------------------------------------------------------------*
     *                  09. Magnific Popup js                                  *
     *-------------------------------------------------------------------------*/

      $('.popup-youtube').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      });
  
    /*-------------------------------------------------------------------------*
     *                  10. Ajax Contact Form js                               *
     *-------------------------------------------------------------------------*/
      // Get the form.
      var form = $('#ajax-contact');

      // Get the messages div.
      var formMessages = $('#form-messages');

      // Set up an event listener for the contact form.
      $(form).on('submit', function (e) {
          // Stop the browser from submitting the form.
          e.preventDefault();

          // Serialize the form data.
          var formData = $(form).serialize();

          // Submit the form using AJAX.
          $.ajax({
                  type: 'POST',
                  url: $(form).attr('action'),
                  data: formData
              })
              .done(function (response) {
                  // Make sure that the formMessages div has the 'success' class.
                  $(formMessages).removeClass('error');
                  $(formMessages).addClass('success');

                  // Set the message text.
                  $(formMessages).text(response);

                  // Clear the form.
                  $('#name').val('');
                  $('#email').val('');
                  $('#subject').val('');
                  $('#message').val('');

              })
              .fail(function (data) {
                  // Make sure that the formMessages div has the 'error' class.
                  $(formMessages).removeClass('success');
                  $(formMessages).addClass('error');

                  // Set the message text.
                  if (data.responseText !== '') {
                      $(formMessages).text(data.responseText);
                  } else {
                      $(formMessages).text('Oops! An error occured and your message could not be sent.');
                  }
              });

      });

        /*-------------------------------------------------------------------------*
        *                   11. MailChimp js                                      *
         *-------------------------------------------------------------------------*/
          $('#mc-form').ajaxChimp({
              language: 'en',
              callback: mailChimpResponse,

              // ADD YOUR MAILCHIMP URL BELOW HERE!
              url: 'http://coderspoint.us14.list-manage.com/subscribe/post?u=e5d45c203261b0686dad32537&amp;id=d061f39c51'

          });

          function mailChimpResponse(resp) {
              if (resp.result === 'success') {
                  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
                  $('.mailchimp-error').fadeOut(400);

              } else if (resp.result === 'error') {
                  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
              }
          }
    
})(jQuery);