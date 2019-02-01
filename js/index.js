// Your code goes here
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = "green";
    })
})

var randomColor = Math.floor(Math.random()*16777215).toString(16);
//NOT WORKING
let h1 = document.querySelector('.logo-heading');
h1.addEventListener('keypress', (event) => {
    h1.style.color = 'red';
})

