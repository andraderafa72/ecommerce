var swiperThumbs = new Swiper('.slide-preview .swiper-thumbs', {
  loop: true,
})

var productSwiper = new Swiper('.product-swiper .swiper', {
  loop: true,
  pagination: {
    el: ".swiper-pagination-product",
  },
  navigation: {
    nextEl: '.swiper-button-next-product',
    prevEl: '.swiper-button-prev-product',
  },
  spaceBetween: 30,
  // thumbs: {
  //   swiper: swiperThumbs
  // }
});

const variants = document.querySelectorAll('input[name="variant"]');

variants.forEach(el =>{
  el.addEventListener('click', e => {
    el.checked = true;

    variants.forEach(variant => {
      variant.checked = false
      const variantLabel = document.querySelector(`label[for=${variant.attributes.id.nodeValue}]`)
      variantLabel.classList.remove('active');
    });

    const label = document.querySelector(`label[for=${el.attributes.id.nodeValue}]`)

    label.classList.add('active');
  })
})