var swiper = new Swiper(".hero-slider .swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next-hero',
    prevEl: '.swiper-button-prev-hero',
  },
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
  slidesPerView: 7,
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
  slidesPerView: 4,
  spaceBetween: 10,
})

// COUNTDOWN

var timer = new Timer();
timer.start();

timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});