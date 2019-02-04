// Your code goes here

//Propagation

let destination = document.querySelectorAll('.destination');
destination.forEach((place) => {
    place.addEventListener('click', (event) => {
        place.style.backgroundColor = "red";
    })
})

let h4 = document.querySelectorAll('h4');
h4.forEach((title) => {
    title.addEventListener('click', (event) => {
        title.style.backgroundColor = "green";
        event.stopPropagation(); // <-- Stop Propagation of h4 effect
    })
})

//Event Listeners

// 1 mouseover - WORKS
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = "white";
        link.style.backgroundColor = "gray"
        link.style.verticalAlign = "middle";
    })
})

navLinks.forEach((link) => {
    link.addEventListener('click', event => {
        event.preventDefault();                 //preventDefault()
    })
})

let img = document.querySelectorAll('img');
img[0].addEventListener('mouseover', event => {
    img[0].setAttribute('src', 'img/fly-bus.png');
})

// 2 mouseout - WORKS

navLinks.forEach((link) => {
    link.addEventListener('mouseout', (event) => {
        link.style.color = "black";
        link.style.backgroundColor = "lightblue";
    })
})

img[0].addEventListener('mouseout', event => {
    img[0].setAttribute('src', 'img/fun-bus.jpg');
})

// 3 click - WORKS

img[1].addEventListener('click', (event) => {
    img[1].setAttribute('src', 'img/kitty01.png')
})
img[2].addEventListener('click', (event) => {
    img[2].setAttribute('src', 'img/kitty01.png')
})

// 4 dblclick - WORKS

img[1].addEventListener('dblclick', (event) => {
    img[1].setAttribute('src', 'img/kitty02.png')
})

img[2].addEventListener('dblclick', (event) => {
    img[2].setAttribute('src', 'img/kitty02.png')
})

// 5 resize - WORKS

let h2 = document.querySelectorAll('h2');
window.addEventListener('resize', (event) => {
    h2.forEach((heading) => {
        heading.style.color= "steelblue";
        heading.style.fontSize= "50px";
        heading.textContent = "Whoa resizing!"
    })
})

// 6 scroll - WORKS

let body = document.querySelector('body');
let color = ['moccasin', 'navajowhite', 'palegoldenrod', 'papayawhip', 'peachpuff'];

document.addEventListener("scroll", (event) => {
    body.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
})

// 7 keydown - WORKS

let newH1 = ['Keydown Bus', 'Flying Bus', 'Fast Bus', 'Slow Bus', 'Water Bus', 'Space Bus', 'Kitty Bus', 'Meow Bus']

let h1 = document.querySelector('.logo-heading');
document.addEventListener('keydown', (event) => {
    h1.textContent = newH1[Math.floor(Math.random() * newH1.length)];
})

// 8 drag / dragend - WORKS

h1.addEventListener('drag', (event) => {
    h1.textContent = "You're dragging me!"
    h1.style.color = "goldenrod";
})

h1.addEventListener('dragend', (event) => {
    h1.style.color = "peachpuff";
    h1.textContent = "Rough landing!"
})

// 9 contextmenu - WORKS

document.addEventListener('contextmenu', (event) => {
    alert(`You've discovered the secret menu!`);
})

// 10 load - WORKS

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
})

