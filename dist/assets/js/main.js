$(function () {

  const userCheckSwiper = new Swiper(".user-check", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: '.swiper-pagination',
    //centeredSlides: true,
    //centeredSlidesBounds: true,
    //initialSlide: 0,
    paginationType: "bullets",
    //watchOverflow: true,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".user-check .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      720: {
        spaceBetween: 30,
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        if (userCheckSwiper.isBeginning || userCheckSwiper.isEnd) {
          userCheckSwiper.params.centeredSlides = false;
        } else {
          userCheckSwiper.params.centeredSlides = true;
        }
        userCheckSwiper.update();
      }
    }

  });


  //bannerSwiper
  var bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 'auto',
    pagination: {
      el: ".banner-zone .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".banner-zone .swiper-button-next",
      prevEl: ".banner-zone .swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
  $('.banner-zone  .swiper-button-pause').click(function () {
    if ($(this).hasClass('off')) {
      $(this).removeClass('off');
      bannerSwiper.autoplay.start();
    } else {
      $(this).addClass('off');
      bannerSwiper.autoplay.stop();
    }
  });



})