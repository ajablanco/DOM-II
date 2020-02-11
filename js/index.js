// Your code goes here

//mouseover
const navItemOne = document.querySelector('.nav-link:first-child')

navItemOne.addEventListener('mouseover', (event) => {
  navItemOne.style.color = "pink";
})


//copy
const h2s = document.querySelectorAll('h2');

h2s.forEach(el => {
    el.addEventListener('copy', (event) => {
        el.style.color = "orange";
      })
})

//scroll
const body = document.querySelector('body');

window.addEventListener('scroll', (e) => {
  body.style.backgroundColor = "lavender";
})

//double click
const img = document.querySelectorAll('img');

img.forEach(el => {
    el.addEventListener('dblclick', (e) => {
        el.style.transform = "scale(1.1)";
    })
})

//resize
const h1 = document.querySelector('h1');

window.addEventListener('resize', () => {
    h1.style.fontSize = "7rem";
})

//keydown
const p = document.querySelectorAll('p');

p.forEach(el => {
    window.addEventListener('keydown', (e) => {
        el.style.fontSize = "2rem";
    })
})

//keyup
p.forEach(el => {
    window.addEventListener('keyup', (e) => {
        el.style.fontSize = "1.6rem";
    })
})

// //wheel
// function zoom(event) {
//     event.preventDefault();
  
//     scale += event.deltaY * -0.01;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     paragraph.style.transform = `scale(${scale})`;
//   }
  
//   let scale = 1;
//   const paragraph = document.querySelectorAll('p');
//   paragraph.onwheel = zoom;

//   paragraph.addEventListener('wheel', (zoom));


  //prevent default
  const stopLink = document.querySelector('.nav-link');
    stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("stopped the link")
  })




