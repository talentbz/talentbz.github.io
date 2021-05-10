$('.slider-for').slick({
  autoplay: false,
  //autoplaySpeed: 1000,
  pauseOnHover: true,
  arrows: false,
  dots: false,
  infinite: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  focusOnSelect: true,
  asNavFor: '.slider-for',
});

$('#default-demo').slickLightbox({

  // closeOnBackdropClick: false,
  // slick: function ($e) {

  //   $e.find('.slick-lightbox-slick-iframe').each(function () {
  //     $(this)
  //       .attr('data-src', $(this).attr('src'))
  //       .attr('src', '')
  //   })

  //   function clearIframe(slick, index) {
  //     var $iframe = $(slick.$slides.get(index)).find('.slick-lightbox-slick-iframe')
  //     if ($iframe.length) {
  //       setTimeout(function () {
  //         $iframe.attr('src', '')
  //       }, slick.options.speed)
  //     }
  //   }

  //   function loadIframe(slick, index) {
  //     var $iframe = $(slick.$slides.get(index)).find('.slick-lightbox-slick-iframe')
  //     if ($iframe.length) $iframe.attr('src', $iframe.attr('data-src'))
  //   }

  //   /**
  //    * Return slick instance
  //    */
  //   return $e.find('.slick-lightbox-slick')
  //     .on('init', function (event, slick) {
  //       loadIframe(slick, slick.currentSlide)
  //     })
  //     .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //       clearIframe(slick, currentSlide)
  //       loadIframe(slick, nextSlide)
  //     })
  //     .slick()
  // }
});
    //  $('.slider-for').slick({
    //   arrows: false,
    //   dots: false,
    //   accessibility: false,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 5000,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   fade: true,
    //   asNavFor: '.slider-nav',
    //   responsive: [{
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });
    // $('.slider-nav').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   dots: true,
    //   centerMode: true,
    //   focusOnSelect: true
    // });

  //   var sLightbox = $(this);
  //   sLightbox.slickLightbox({
  //     src: 'src',
  //     itemSelector: '.team-image img'
  //   });
  // });
