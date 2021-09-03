const categoriesMenu = document.querySelector(".categories-header-menu");
const toggleCategoriesMenu = document.querySelector(".toggle-categories-menu");

const burgerCollapse = document.querySelector(".hamburger--collapse");
const burgerMenu = document.querySelector(".burger-menu");

toggleCategoriesMenu.addEventListener("click", (e) => {
  if (categoriesMenu.classList.contains("open")) {
    categoriesMenu.classList.remove("open");
  } else {
    categoriesMenu.classList.add("open");
  }
});

burgerCollapse.addEventListener("click", (e) => {
  if (burgerCollapse.classList.contains("is-active")) {
    burgerMenu.classList.remove('visible')
    burgerCollapse.classList.remove("is-active");
  } else {
    burgerCollapse.classList.add("is-active");
    burgerMenu.classList.add('visible')
  }
});

document.addEventListener("click", (e) => {
  const target = e.target;

  if (
    !target.classList.contains("categories-header-menu") &&
    !target.classList.contains("toggle-categories-menu") &&
    categoriesMenu.classList.contains("open")
  ) {
    categoriesMenu.classList.remove("open");
  }
});
