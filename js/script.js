const dropdown = document.querySelector(".dropdown");
const headerNav = document.querySelector(".header-nav");
const navLink = document.querySelectorAll(".links");

dropdown.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    dropdown.classList.toggle("active");
    headerNav.classList.toggle("active");
}

function closeMenu() {
    dropdown.classList.remove("active");
    headerNav.classList.remove("active");
}