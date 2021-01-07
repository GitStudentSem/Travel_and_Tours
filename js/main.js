var burger = document.querySelector(".header__burger");
burger.addEventListener("click", function () {
  console.log("Клик");
  document
    .querySelector(".header__menu")
    .classList.toggle("header__menu-visible");
});
