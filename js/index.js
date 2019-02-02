// Your code goes here

// mouseover - WORKS
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        link.style.color = "green";
        link.style.backgroundColor = "lightgray"
        link.style.width = "80px"
        link.style.verticalAlign = "middle";
    })
})

//mouseout - WORKS

navLinks.forEach((link) => {
    link.addEventListener('mouseout', (event) => {
        link.style.color = "black";
        link.style.backgroundColor = "lightblue";
    })
})

// click - WORKS

let img = document.querySelectorAll('img');
img[1].addEventListener('click', (event) => {
    img[1].setAttribute('src', 'img/kitty01.png')
})
img[2].addEventListener('click', (event) => {
    img[2].setAttribute('src', 'img/kitty01.png')
})

//dblclick - WORKS

img[1].addEventListener('dblclick', (event) => {
    img[1].setAttribute('src', 'img/kitty02.png')
})

img[2].addEventListener('dblclick', (event) => {
    img[2].setAttribute('src', 'img/kitty02.png')
})

// resize - WORKS

let h2 = document.querySelectorAll('h2');
window.addEventListener('resize', (event) => {
    h2.forEach((heading) => {
        heading.style.color= "blue";
        heading.style.fontSize= "50px";
    })
})

// scroll - WORKS

window.addEventListener("scroll", (event) => {
    img[0].setAttribute('src', 'img/fly-bus.png');
})

// load

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
})

// keydown
//var randomColor = Math.floor(Math.random()*16777215).toString(16);
//NOT WORKING

let container = querySelector('.container');
container.addEventListener('keydown', (event) => {
    container.style.backgroundColor = "yellow";
})

// drag / drop

let h1 = querySelector('h1');
h1.addEventListener('drag', (event) => {
    h1.style.color = "pink";
})

// focus

// select

let p = querySelectorAll('p');
p.addEventListener('select', (event) => {
    p.style.backgroundColor = "blue";
})

//propagation

let btn = querySelectorAll('.btn');
btn[0].addEventListener('click', (event) => {
    event.child.style.backgroundColor = "green";
})
