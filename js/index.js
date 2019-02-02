// Your code goes here

// mouseover
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = "green";
    })
})

navLinks.forEach((link) => {
    link.addEventListener('mouseout', (event) => {
        link.style.color = "orange";
    })
})

// keydown
//var randomColor = Math.floor(Math.random()*16777215).toString(16);
//NOT WORKING
let h1 = document.querySelector('.logo-heading');
h1.addEventListener('keydown', (event) => {
    event.target.style.color = 'red';
})

// click

let img = document.querySelectorAll('img');
img[1].addEventListener('click', (event) => {
    img[1].setAttribute('src', 'img/kitty01.png')
})
img[2].addEventListener('click', (event) => {
    img[2].setAttribute('src', 'img/kitty01.png')
})

//dblclick

img[1].addEventListener('dblclick', (event) => {
    img[1].setAttribute('src', 'img/kitty02.png')
})

img[2].addEventListener('dblclick', (event) => {
    img[2].setAttribute('src', 'img/kitty02.png')
})

// drag / drop

// load

// focus

// resize

// scroll

// select

// dblclick



