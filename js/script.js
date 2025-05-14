
const navLinks = document.querySelectorAll('header nav a');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav'); 

// responsive menu  
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Scroll section active link
window.addEventListener('scroll', () => {
  let currentSection = '';

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumeDetails = document.querySelectorAll('.resume-detail');



        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        resumeDetails[idx].classList.add('active');
    });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });

    portfolioDetails[index].classList.add('active');
}


arrowRight.addEventListener('click', ()=>{

    if (index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');

    }
    activePortfolio();
    
}) 


arrowLeft.addEventListener('click', ()=>{

    if (index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');

    }
    activePortfolio();
    
}) 