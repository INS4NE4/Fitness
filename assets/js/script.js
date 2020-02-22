const navbarToggler = document.querySelector ('.toggler');
const navbarLinks = document.getElementById ('menu');
navbarToggler.addEventListener('click', navbarTogglerClick);

function navbarTogglerClick () {
    navbarToggler.classList.toggle("open_toggler");
    navbarLinks.classList.toggle("main_navigation_active");
}
// AboutSlider
let galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  // Trainers
  var swiper = new Swiper('.slider-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // Testmonials
  var swiper = new Swiper('.swiper-wrapper_col-sm', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // Testmonials Mobile
  var swiper = new Swiper('.swiper-container_testmonials', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });