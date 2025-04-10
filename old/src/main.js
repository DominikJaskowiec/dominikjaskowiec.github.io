const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("toggled");
    navMenu.classList.toggle("toggled");
    body.classList.toggle('stop-scrolling')
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("toggled");
    navMenu.classList.remove("toggled");
    body.classList.remove('stop-scrolling')
}

