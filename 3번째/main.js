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



