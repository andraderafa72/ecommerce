var swiper = new Swiper(".hero-slider .swiper", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-hero",
    prevEl: ".swiper-button-prev-hero",
  },
  spaceBetween: 60,
});

var topProducts = new Swiper(".selected-products .swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-top",
    prevEl: ".swiper-button-prev-top",
  },
  slidesPerView: 3,
});

var categories = new Swiper(".categories .swiper", {
  freeMode: true,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev-categories",
    nextEl: ".swiper-button-next-categories",
  },
  pagination: {
    el: ".swiper-pagination-categories",
    clickable: true,
  },
  slidesPerView: 2,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 480px
    520: {},
    620: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 6,
    },
    // when window width is >= 640px
    1080: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1900: {
      slidesPerView: 7,
    },
    2200: {
      slidesPerView: 10,
      freeMode: false,
    },
  },
});

var saleItems = new Swiper(".sale-items .swiper", {
  // loop: true,
  pagination: {
    el: ".sale-items .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-sale",
    prevEl: ".swiper-button-prev-sale",
  },
  freeMode: true,
  centered: true,
  slidesPerView: 1.25,
  spaceBetween: 15,
  breakpoints: {
    1080: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
