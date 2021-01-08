var burger = document.querySelector(".header__burger");
burger.addEventListener("click", function () {
  document
    .querySelector(".header__menu")
    .classList.toggle("header__menu-visible");
});
