
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const cross = document.querySelector('#cross');

menu.addEventListener("click", function(e) {
    event.preventDefault();

    nav.style.display = "flex";
})

let menuActive = String(nav.display);
console.log(menuActive);