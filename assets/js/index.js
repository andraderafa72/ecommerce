var swiper = new Swiper(".hero-slider .swiper", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-hero',
    prevEl: '.swiper-button-prev-hero',
  },
  spaceBetween: 60,
});

var topProducts = new Swiper('.selected-products .swiper', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },
  slidesPerView: 3,
});

var categories = new Swiper('.categories .swiper', {
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination-categories",
    clickable: true,

  },
  slidesPerView: 2,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 480px
    520: {
    },
    620: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
    1080: {
      spaceBetween: 20,
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    1900: {
      slidesPerView: 7,
    }
  }
});

var saleItems = new Swiper('.sale-items .swiper', {
  loop: true,
  pagination: {
    el: ".sale-items .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-sale',
    prevEl: '.swiper-button-prev-sale',
  },
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
})

saleItems.updateContainerSize();
