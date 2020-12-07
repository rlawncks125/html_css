
"use strict";
//  Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   type : 'fraction',
        // renderBullet: function (index, className) {
        // return `<span class="${className}">${index+1}</span>`;
        // }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
