const dropdown = document.querySelector(".dropDown");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".links");

dropdown.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    dropdown.classList.toggle("active");
    navLinks.classList.toggle("active");
}

function closeMenu() {
    dropdown.classList.remove("active");
    navLinks.classList.remove("active");
}