let hamburgerMenu = document.getElementById("hamburger");
let navBar = document.querySelector("nav ul");
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    navBar.classList.toggle('is-active');
})