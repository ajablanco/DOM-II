const blocks = document.querySelectorAll('.block');

const redBlock = document.querySelector('.block--red');

const blueBlock = document.querySelector('.block--blue');

const greenBlock = document.querySelector('.block--green');

const pinkBlock = document.querySelector('.block--pink');

const grayBlock = document.querySelector('.block--gray');

blocks.forEach(ele => {
    ele.addEventListener('click', (event) => {
        ele.parentNode.prepend(ele);
    })
})



//transform

blocks.forEach(ele => {
    ele.addEventListener('mousedown', (event) => {
        ele.style.transform = "translateX(700px)";

        ele.style.transition = "10s";
    })
})

blocks.forEach(ele => {
    ele.addEventListener('mouseleave', (event) => {
        ele.style.transform = "translateX(0px)";

        ele.style.transition = "10s";
    })
})




 