//Review Swiper
  
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
 
  // swiper for Home Section
var homeSwiper = new Swiper(".homeSwiper", {
  spaceBetween: 0,  
  centeredSlides: true,
  effect: "fade",  
  autoplay: {
      delay: 3000,  
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

//scroll reveal animation
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration:'2500',
  delay:'400',
})
animate.reveal('.nav');
animate.reveal('.login-navbar');
animate.reveal(".about,.service-items,.review-box", {interval:100});



//indicate current navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => link.addEventListener('click', () => {
  document.querySelector('.active')?.classList.remove('active');   // removing previous active link
  link.classList.add('active');   //adding active to current link
}));
  

// button shows when user scrolls down 200px
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 200) {   //only after 200px from top
      backToTopButton.style.display = 'flex';
  } else {
      backToTopButton.style.display = 'none';
  }
});

// scroll to top when user clicks the button
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
      top: 0      
  });
});





    