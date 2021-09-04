var swiperThumbs = new Swiper(".slide-preview .swiper-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4, // DEFINIR COMO O NUMERO DE IMAGENS DO PRODUTO
  freeMode: true,
  watchSlidesProgress: true,
  // breakpoints: {
  //   // when window width is >= 480px
  //   520: {
  //     slidesPerView: 3,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //   },
  //   1080: {
  //     slidesPerView: 5,
  //   },
  // },
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

var relatedProducts = new Swiper(".related-products .swiper", {
  loop: true,
  pagination: {
    el: ".sale-items .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-related",
    prevEl: ".swiper-button-prev-related",
  },
  freeMode: true,
  centered: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
  // loop: true,
  // spaceBetween: 30,
  // breakpoints: {
  //   // when window width is >= 480px
  //   520: {
  //     slidesPerView: 2,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 2,
  //   },
  //   1080: {
  //     slidesPerView: 3,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //   },
  //   1900: {
  //     slidesPerView: 4,
  //     spaceBetween: 10,
  //   }
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next-related",
  //   prevEl: ".swiper-button-prev-related",
  // },
  // pagination: {
  //   el: ".swiper-related-pagination",
  //   clickable: true,
  // },
});

var variants = document.querySelectorAll('input[name="variant"]');
var plusButton = document.querySelector(".plus");
var minusButton = document.querySelector(".minus");
var quantityInput = document.querySelector("#quantity");

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
      var variantLabel = document.querySelector(
        `label[for=${variant.attributes.id.nodeValue}]`
      );
      variantLabel.classList.remove("active");
    });

    var label = document.querySelector(
      `label[for=${el.attributes.id.nodeValue}]`
    );

    label.classList.add("active");
  });
});

var toggleProductDescription = document.querySelector(
  ".toggle-product-description-visibility"
);
var productDescriptionWrapper = document.querySelector(
  ".product-description .wrapper"
);
var toggleProductInfo = document.querySelector(
  ".toggle-product-info-visibility"
);
var productInfoWrapper = document.querySelector(".product-info .wrapper");

toggleProductDescription.addEventListener("click", (e) => {
  if (productDescriptionWrapper.classList.contains("visible")) {
    productDescriptionWrapper.classList.remove("visible");
    toggleProductDescription.classList.remove("open");
  } else {
    toggleProductDescription.classList.add("open");
    productDescriptionWrapper.classList.add("visible");
  }
});

toggleProductInfo.addEventListener("click", (e) => {
  if (productInfoWrapper.classList.contains("visible")) {
    productInfoWrapper.classList.remove("visible");
    toggleProductInfo.classList.remove("open");
  } else {
    productInfoWrapper.classList.add("visible");
    toggleProductInfo.classList.add("open");
  }
});
