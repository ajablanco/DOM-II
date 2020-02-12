// Your code goes here

//mouseover
const navItemOne = document.querySelector('.nav-link:first-child');

navItemOne.addEventListener('mouseover', (e) => {
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
const nav2 = document.querySelector('.nav-link:nth-child(2)');

nav2.addEventListener('dblclick', (e) => {
        nav2.style.color = "blue";
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


//   prevent default
  const stopLink = document.querySelector('.nav-link');
    stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert("prevented default / stopped the link");
  })


  //touchend
  const header = document.querySelector('h1')

  header.addEventListener('touchend', (event) => {
    header.style.fontSize = "8rem";
  })
  console.log(header);
  
  //touchstart
  header.addEventListener('touchstart', (event) => {
    header.style.color = "dodgerblue";
  });

  //click
  const button = document.querySelectorAll('.btn');

  button.forEach(ele => {
      ele.addEventListener('click', (e) => {
          ele.style.backgroundColor = "papayawhip";
          e.stopPropagation();
      })
  })

  const destination = document.querySelectorAll('.destination');

  destination.forEach(ele => {
      ele.addEventListener('click', (e) => {
          ele.style.backgroundColor = "pink";
      })
  })

  //green sock animations
  const images = document.querySelectorAll('img');
  
  images.forEach(ele => {
    ele.addEventListener("click", (e) => {
        gsap.to('img', {
             duration: 1,
             rotateY: 180,
             ease: "elastic(1, 0.75)",
             yoyo: true,
             repeat: 1
            })
        })
  })
 
  images.forEach(ele => {
    ele.addEventListener("mouseleave", (e) => {
        gsap.to('img', {
             duration: 1,
             rotateY: 360,
             ease: "elastic(1, 0.75)",
             yoyo: true,
             repeat: 1
            })
        })
  })