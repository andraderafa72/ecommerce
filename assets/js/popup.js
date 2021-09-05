var closePopup = document.querySelector('.cupom-popup-wrapper .cupoms button');
var popupScreen = document.querySelector('.cupom-popup-wrapper');
closePopup.addEventListener("click", (e) => {
  popupScreen.classList.add('hidden');
  setTimeout(() => {
    popupScreen.classList.add('negative-index');
  }, 1000)
})