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

// 7 load - WORKS

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
})

// 8 keydown

let h3 = document.querySelectorAll('h3');
    h3.forEach((heading) => {
        heading.addEventListener('keydown', e => {
        heading.textContent = "keydown";
    })
})


// 9 drag / drop

let h1 = querySelector('h1');
h1.addEventListener('drag', (event) => {
    h1.style.color = "pink";
})

// 10 select

let p = querySelectorAll('p');
p[0].addEventListener('select', (event) => {
    p[0].style.textContent = `Ooh new paragraph!`;
})



