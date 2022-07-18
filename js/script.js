const navToggle=document.querySelector(".nav-toggle");
const nav=document.querySelector('.nav');

navToggle.addEventListener('click',()=>{
    navToggle.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});