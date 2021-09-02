var swiper = new Swiper(".hero-slider .swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
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
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next-categories',
    prevEl: '.swiper-button-prev-categories',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
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
  },
  navigation: {
    nextEl: '.swiper-button-next-sale',
    prevEl: '.swiper-button-prev-sale',
  },
  spaceBetween: 30,    
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,    
    },
    1900: {
      slidesPerView: 4,
      spaceBetween: 10,    
    }
  }
})
