const fixedBanner = document.querySelector('.fixed-banner')

window.addEventListener('scroll', e => {
  if(window.pageYOffset >= 700){ 
    fixedBanner.classList.add('fixed')
  } else {
    fixedBanner.classList.remove('fixed')
  }
});