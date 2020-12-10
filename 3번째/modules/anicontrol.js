
const desktopWidth = 1180;

class Dropdown {
    constructor(target) {
        this.dropdown = target;
        this.dropdown.addEventListener("mouseover", () => {
            this.dropDwonAniDT('over');
        });

        this.dropdown.addEventListener("mouseleave", () => {
            this.dropDwonAniDT('out');
        })
        this.dropdown.addEventListener("click", () => {
            if( desktopWidth <= window.innerWidth){
                return
            }

            switch (this.dropdown.dataset.ani_click) {
                case "":
                case "off":
                    this.dropDwonAniMB("on");
                    break;
                case "on":
                    this.dropDwonAniMB("off");
                    break;
                default:
                    new Error("메뉴 어바웃 클릭에러");
            }
        })
    }        
    dropDwonAniDT(txt) {
        if( desktopWidth >= window.innerWidth)  return 

        switch (txt) {
            case "over":
                this.dropdown.dataset.ani_hover = "over";
                break;
            case "out":
                this.dropdown.dataset.ani_hover = "out";
                break;
            default:
                new Error(" 메튜버튼 에니메이션 에러");
        }
    }
    dropDwonAniMB(txt) {
        if( desktopWidth <= window.innerWidth)  return


        switch (txt) {
            case "on":
                this.dropdown.dataset.ani_click = "on";
                break;
            case "off":
                this.dropdown.dataset.ani_click = "off";
                break;
            default:
                new Error(" 메튜버튼 에니메이션 에러");
        }
    }

    deskTopAniRest() {
        this.dropdown.dataset.ani_hover = "";
    }
    tabletAniRest() {
        this.dropdown.dataset.ani_click = "";
    }
}

// function dropDwonAni(txt, target) {
//     switch (txt) {
//         case "over":
//             target.dataset.ani_hover = "over";
//             break;
//         case "out":
//             target.dataset.ani_hover = "out";
//             break;
//         case "on":
//             target.dataset.ani_click = "on";
//             break;
//         case "off":
//             target.dataset.ani_click = "off";
//             break;
//         default:
//             new Error(" 메튜버튼 에니메이션 에러");
//     }
// }

class TogEvent{
    constructor() {
        this.menu_tog = document.querySelector(".menu_tog");
        this.menu_teb = document.querySelector(".menu_teb");
        this.menu_close = document.querySelector(".close_btn");
        this.menu_about = document.querySelector(".menu_about");

        this.menu_tog.addEventListener("click",()=>{
            this.menu_teb.classList.add("active");
            this.menu_tog.classList.add("active");
            
        })
        this.menu_close.addEventListener("click",()=>{
            this.Reset();
        })
    }    

    Reset(){
        this.menu_teb.classList.remove("active");
        this.menu_tog.classList.remove("active"); 
        this.menu_about.dataset.ani_click = "";       
    }
}


export { Dropdown , TogEvent};