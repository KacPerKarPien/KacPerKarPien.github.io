function main(){
    'use strict'
    const icon_menu = document.querySelector("#icon_menu");
    const menu = document.querySelector("#menu");
    icon_menu.addEventListener("touchend", ()=>{
        icon_menu.classList.toggle("open_menu_icon");
        menu.classList.toggle("open_menu");
    });
    
}
window.addEventListener('load', main);
