// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');
  const menuItems = document.querySelectorAll('.navbar .mobile-menu-items a');

  console.log('Script loaded and event listeners added.');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  menuItems.forEach((item) => {
    item.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// Swiper
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 20,
  loop: true,
  loopFix: true,
  loopAdditionalSlides: 3,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Swiper 1
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 3,
  loopedSlides: 5,
  loopAdditionalSlides: 3,
  spaceBetween: 10,
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 100,
    modifier: 1.5,
    slideShadows: true,
  },
  keyboard: { enabled: true },
  mousewheel: { thresholdDelta: 70 },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  },
});
