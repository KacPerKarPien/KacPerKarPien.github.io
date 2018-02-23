function main(){
    'use strict'
    const iconMenu = document.querySelector("#icon_menu");
    const menu = document.querySelector("#menu");
    const span = document.querySelectorAll(".button_menu span");
    iconMenu.addEventListener("click", ()=>{
        for(let i=0; i<span.length; i++){
            span[i].classList.toggle(`line-${i+1}`);
        }
        menu.classList.toggle("open_menu");
    });
}
window.addEventListener('load', main);

let a = 10,b = 12, c = a, d = b;
console.log(c);