const fixedBanner = document.querySelector('.fixed-banner')

window.addEventListener('scroll', e => {
  console.log(window.pageYOffset)
  if(window.pageYOffset >= 500){ 
    fixedBanner.classList.add('fixed')
  } else {
    fixedBanner.classList.remove('fixed')
  }
});