"use strict";




window.addEventListener("resize",()=>{
    // console.log(window.innerWidth);
    if( desktopWidth >= window.innerWidth){
        deskTopAniRest();
    }
    else{
        tabletAniRest();
    }
})



const desktopWidth = 1180;
const menu_about = document.querySelector(".menu_about");
    
menu_about.addEventListener("mouseover", () => {
    meniAboutAni("over");
})

menu_about.addEventListener("mouseleave", () => {
    meniAboutAni("out");
})

menu_about.addEventListener("click", () => {
    switch (menu_about.dataset.ani_click) {
        case "":
        case "off":
            meniAboutAni("on");
            break;
        case "on":
            meniAboutAni("off");
            break;
        default:
            new Error("메뉴 어바웃 클릭에러");
    }
})


const menu_tog = document.querySelector(".menu_tog");
const menu_teb = document.querySelector(".menu_teb");
const menu_close = document.querySelector(".close_btn");

menu_tog.addEventListener("click",()=>{
    menu_teb.classList.add("active");
    menu_tog.classList.add("active");
    
})
menu_close.addEventListener("click",()=>{
    menu_teb.classList.remove("active");
    menu_tog.classList.remove("active");

})





function deskTopAniRest(){
    menu_about.dataset.ani_hover = "";
}
function tabletAniRest(){
    menu_about.dataset.ani_click = "";
}

function meniAboutAni(txt) {
    switch (txt) {
        case "over":
            menu_about.dataset.ani_hover = "over";
            break;
        case "out":
            menu_about.dataset.ani_hover = "out";
            break;
        case "on":
            menu_about.dataset.ani_click = "on";
            break;
        case "off":
            menu_about.dataset.ani_click = "off";
            break;
        default:
            new Error(" 메튜버튼 에니메이션 에러");
    }
}



