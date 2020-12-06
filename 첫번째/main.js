"use strick"

const header = document.querySelector(".header");
let bool_hader_scroll = false;

window.addEventListener("scroll", (e) => {

    const Y = window.scrollY;


    if (Y > 10) {
        if (bool_hader_scroll) return;

        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})

function GetTxtWdith(text){
    const gettext=text;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");    
    const put = ctx.measureText(gettext);
    // console.log(put);

    return put.width;
}


// const swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

