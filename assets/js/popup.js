var closePopup = document.querySelector(".cupom-popup-wrapper .cupoms button");
var popupScreen = document.querySelector(".cupom-popup-wrapper");
closePopup.addEventListener("click", (e) => {
  popupScreen.classList.add("hidden");
  setTimeout(() => {
    popupScreen.classList.add("negative-index");
  }, 1000);
});

popupScreen.addEventListener("click", (e) => {
  const target = e.target;

  if (target === popupScreen) {
    popupScreen.classList.add("hidden");
    setTimeout(() => {
      popupScreen.classList.add("negative-index");
    }, 1000);
  }
});
