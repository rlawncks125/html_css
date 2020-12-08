
const ab = document.querySelector('.menu_about');
const drop = document.querySelector(".about_drop");


const tog = document.querySelector(".nav_toogle");
const nav_items = document.querySelector(".nav_menu_items");
const nav_items_close = document.querySelector(".menu_button");

ab.addEventListener("mouseover",()=>{
    ab.classList.add("over");
})
ab.addEventListener("mouseout",()=>{
    ab.classList.remove("over");
})

ab.addEventListener("click",()=>{
    ab.classList.toggle("active");
})
tog.addEventListener("click",()=>{
    nav_items.classList.add("active");
    tog.classList.add("active");
})

nav_items_close.addEventListener("click",()=>{
    nav_items.classList.remove("active");
    tog.classList.remove("active");
})


console.log(ab);
console.log(drop);

