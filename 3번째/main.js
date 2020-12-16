"use strict";

import * as ani from "./modules/anicontrol.js";

const desktopWidth = 1180;


window.addEventListener("resize",()=>{
    // console.log(window.innerWidth);
    if( desktopWidth >= window.innerWidth){
        deskTopAniRest();
    }
    else{
        tabletAniRest();
    }
})


const menu_about = new ani.Dropdown(document.querySelector(".menu_about"));
new ani.TogEvent();


function deskTopAniRest(){
    menu_about.deskTopAniRest();

}
function tabletAniRest(){
    menu_about.tabletAniRest();
}


const swiper = new Swiper('.top_slide', {
    slidesPerView: 1,
    speed : 500,
    loop: true,
    // simulateTouch : false,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper_product = new Swiper('.swiper_product', {
    slidesPerView: 1,
    speed : 500,
    loop: true,
    // simulateTouch : false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // 맨위 버튼 작업
  const upBtn = document.querySelector(".up_arrow");
  upBtn.addEventListener("click",()=>{
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    }
    )
  })
  // 푸터 show 작업
const footerBtn = document.querySelector(".show_btn");
const showfooter= document.querySelector(".footer_hide_content");
footerBtn.addEventListener("click",()=>{
  showfooter.classList.toggle("active");
 window.scrollTo(0,document.body.scrollHeight);
})
