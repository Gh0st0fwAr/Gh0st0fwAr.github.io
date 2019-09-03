
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const menuLinks = document.getElementsByClassName('nav__link');


menu.addEventListener("click", function(e) {
    event.preventDefault();

    nav.style.display = "flex";
    cross.style.display = "unset";
    document.body.style.overflow = 'hidden';
})

cross.addEventListener("click", function(e) {
    event.preventDefault();

    nav.style.display = "none";
    cross.style.display = "none";
    document.body.style.overflow = 'unset';
})

menuLinks.addEventListener("click", function(e) {
    event.preventDefault();
    
    nav.style.display = "none";
    cross.style.display = "none";
    document.body.style.overflow = 'unset';
})
