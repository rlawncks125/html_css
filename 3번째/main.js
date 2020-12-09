
const dt_W = 1200;

const ab = document.querySelector('.menu_about');
const drop = document.querySelector(".about_drop");


const tog = document.querySelector(".nav_toogle");
const nav_items = document.querySelector(".nav_menu_items");
const nav_items_close = document.querySelector(".menu_button");

ab.addEventListener("mouseover",()=>{
    deskTopMouseOverEvent('over');
})
ab.addEventListener("mouseout",()=>{
    deskTopMouseOverEvent('out');
})

ab.addEventListener("click",()=>{
    // ab.classList.toggle("active");
    switch(ab.dataset.mb_ani){
        case "":
            ab.dataset.mb_ani = "active";
            break;
        case "active":
            ab.dataset.mb_ani = "close";
            break;
        case "close":
            ab.dataset.mb_ani = "active";
            break;
        default:
            console.log("모바일 액티브 토글 에러");
            break;
    }
})
tog.addEventListener("click",()=>{
    nav_items.classList.add("active");
    tog.classList.add("active");
})

nav_items_close.addEventListener("click",()=>{
    nav_items.classList.remove("active");
    tog.classList.remove("active");
    ab.dataset.mb_ani="";
})

window.addEventListener('resize',()=>{
    // 애니메이션 초기화
     if(dt_W >= window.outerWidth ) {
        //  모바일 전환 - 데탑 초기화
        ab.dataset.dt_ani = '';
     }else{
        //  데탑 전환 - 모바일 초기화
        ab.dataset.mb_ani = '';
        nav_items.classList.remove("active");
        tog.classList.remove("active");
     }
})

function deskTopMouseOverEvent(tx){

    //  데탑 마우스 오버&아웃 이벤트 처리
    if( dt_W >= window.outerWidth) return; 

    if ( tx == 'over') ab.dataset.dt_ani = 'over';
    else if(tx == 'out') ab.dataset.dt_ani = 'out';

}

// console.log(ab);
// console.log(drop);

