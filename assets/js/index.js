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

var SEGUNDO = 1000
var MINUTO = SEGUNDO * 60
var HORA = MINUTO * 60
var DIA = HORA * 24

var hours = document.querySelector('.product-expiration .hours span');
var minutes = document.querySelector('.product-expiration .minutes span');
var seconds = document.querySelector('.product-expiration .seconds span');

var timerValue = {
  horas: 32,
  minutos: 27,
  segundos: 54,
}

setInterval(() => {
  if(timerValue.segundos - 1 < 0) {
    timerValue.segundos = 59
    
    if(timerValue.minutos - 1 < 0) {
      timerValue.minutos = 59

    } else {
      timerValue.minutos -= 1;
    }
  } else {
    timerValue.segundos -= 1
  }

  hours.innerHTML = timerValue.horas
  minutes.innerHTML = timerValue.minutos
  seconds.innerHTML = timerValue.segundos

  console.log(timerValue)
}, 1000)