var swiper = new Swiper(".hero-slider .swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next-hero',
    prevEl: '.swiper-button-prev-hero',
  },
  spaceBetween: 30,
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
  minutos: 0,
  segundos: 10,
}

setInterval(() => {
  if(timerValue.segundos - 1 < 0) {
    timerValue.segundos = 59
    
    if(timerValue.minutos - 1 < 0) {
      timerValue.minutos = 59
      
      if(timerValue.horas - 1 < 0) {
        document.clearInterval()
      } else {
        timerValue.horas -= 1; 
      }
    } else {
      timerValue.minutos -= 1;
    }
  } else {
    timerValue.segundos -= 1
  }

  hours.innerHTML = String(timerValue.horas).padStart(2, '0')
  minutes.innerHTML = String(timerValue.minutos).padStart(2, '0')
  seconds.innerHTML = String(timerValue.segundos).padStart(2, '0')

  console.log(timerValue)
}, 1000)