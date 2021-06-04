// Burger menu functionality

const burgerMenu = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");
const icon = document.querySelector("#burger-btn");

burgerMenu.addEventListener("click", () => {

    navBar.classList.toggle("show");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");

});
