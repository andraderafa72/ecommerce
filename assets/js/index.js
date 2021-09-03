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
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-categories",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    520: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 640px
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
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-sale',
    prevEl: '.swiper-button-prev-sale',
  },
  freeMode: true,
  spaceBetween: 30,    
  breakpoints: {
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
