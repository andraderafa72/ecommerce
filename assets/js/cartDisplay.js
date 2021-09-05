var cartDisplay = document.querySelector(".cart-display");
var cartButton = document.querySelector(".header-top .cart-wrapper");

cartButton.addEventListener("click", (e) => {
  if (cartDisplay.classList.contains("visible")) {
    cartDisplay.classList.remove("visible");
  } else {
    cartDisplay.classList.add("visible");
  }
});

cartDisplay.addEventListener("click", (e) => {
  if (e.target !== cartDisplay) return;
  cartDisplay.classList.remove("visible");
});
