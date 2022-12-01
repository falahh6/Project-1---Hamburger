let hamburgerMenu = document.getElementById("hamburger");
let navBar = document.querySelector("nav ul");
let backdropElement = document.getElementById('backdrop');
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    navBar.classList.toggle('is-active');
    backdropElement.classList.toggle('is-active');
})


let navLinks = document.querySelectorAll('.links');
navLinks.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerMenu.classList.remove('is-active');
        navBar.classList.remove('is-active');
    })
})