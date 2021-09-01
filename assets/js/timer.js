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

}, 1000)