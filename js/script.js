
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


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".services-box").forEach((box, i) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: i * 0.15,
    ease: "power2.out"
  });
});


gsap.registerPlugin(ScrollTrigger);

// Home Detail (fade from left)
gsap.from(".home-detail", {
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out"
});

// Home Image (fade from right)
gsap.from(".home-img .img-box", {
  scrollTrigger: {
    trigger: ".home",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});




gsap.registerPlugin(ScrollTrigger);

// Resume Box Animation (fade-in effect)
gsap.from(".resume-item", {
  scrollTrigger: {
    trigger: ".resume-item",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.3,
});

// Resume Buttons (fade-in from bottom)
gsap.from(".resume-btn", {
  scrollTrigger: {
    trigger: ".resume-btn",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  delay: 0.3,
});

// Resume Details (fade-in from left/right based on section)
gsap.from(".resume-detail", {
  scrollTrigger: {
    trigger: ".resume-detail",
    start: "top 80%",
  },
  opacity: 1,
  x: 100,  // Left to right for most sections
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});


gsap.from(".resume-box", {
  scrollTrigger: {
    trigger: ".resume-box",
    start: "top 80%",
  },
  opacity: 0,
  x: -100,  // Left to right for most sections
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
});

// Adjust for different sections like Education, Skills, About Me
gsap.from(".resume-detail.Education", {
  scrollTrigger: {
    trigger: ".resume-detail.Education",
    start: "top 80%",
  },
  
  // x: 100,  // Right to left for Education
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
  ease: "power2.out",
});

gsap.from(".resume-detail.Skills", {
  scrollTrigger: {
    trigger: ".resume-detail.Skills",
    start: "top 80%",
  },
  opacity: 1,
  y: 50,  // From bottom for Skills section
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  delay: 0.7,
});

gsap.from(".resume-detail.about", {
  scrollTrigger: {
    trigger: ".resume-detail.about",
    start: "top 80%",
  },
  opacity: 1,
  // x: -100, // Left to right for About Me
  duration: 1,
  stagger: 0.3,
  ease: "power2.out",
  delay: 1,
});

  // Portfolio Section Animations
  gsap.from("#porfolio-sec .heading", {
    scrollTrigger: {
      trigger: "#porfolio-sec .heading",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.utils.toArray(".portfolio-detail").forEach((detail, i) => {
    gsap.from(detail, {
      scrollTrigger: {
        trigger: detail,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: i * 0.15,
      ease: "power2.out"
    });
  });

  gsap.from(".portfolio-carousel", {
    scrollTrigger: {
      trigger: ".portfolio-carousel",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".navigation button", {
    scrollTrigger: {
      trigger: ".portfolio-carousel",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Contact Section Animations
  gsap.from("#contact-sec h2", {
    scrollTrigger: {
      trigger: "#contact-sec h2",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from("#contact-sec .desc", {
    scrollTrigger: {
      trigger: "#contact-sec .desc",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  });

  gsap.utils.toArray(".contact-detail").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -50,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  gsap.from("#contact-sec form", {
    scrollTrigger: {
      trigger: "#contact-sec form",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from("#contact-sec form .btn", {
    scrollTrigger: {
      trigger: "#contact-sec form",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    delay: 0.4,
    ease: "back.out(1.7)"
  });
