var swiperThumbs = new Swiper(".slide-preview .swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4, // DEFINIR COMO O NUMERO DE IMAGENS DO PRODUTO
  freeMode: true,
  watchSlidesProgress: true,
});

var productSwiper = new Swiper(".product-swiper .swiper", {
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperThumbs,
  },
});

const variants = document.querySelectorAll('input[name="variant"]');

const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const quantityInput = document.querySelector("#quantity");

plusButton.addEventListener("click", (e) => {
  quantityInput.value = Number(quantityInput.value) + 1;
});

minusButton.addEventListener("click", (e) => {
  quantityInput.value =
    Number(quantityInput.value) - 1 < 1 ? 1 : Number(quantityInput.value) - 1;
});

variants.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.checked = true;

    variants.forEach((variant) => {
      variant.checked = false;
      const variantLabel = document.querySelector(
        `label[for=${variant.attributes.id.nodeValue}]`
      );
      variantLabel.classList.remove("active");
    });

    const label = document.querySelector(
      `label[for=${el.attributes.id.nodeValue}]`
    );

    label.classList.add("active");
  });
});
