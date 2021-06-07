"use strict";

// Мобильное меню
const mobileMenu = () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("header__menu-visible");

    if (menu.classList.contains("header__menu-visible")) {
      disableScrolling();

      menu.addEventListener("click", (event) => {
        const target = event.target;
        console.log("target: ", target);
        // Закрытие меню
        if (target.closest(".header__navbar-link")) {
          menu.classList.remove("header__menu-visible");
          window.onscroll = () => {};
        }
      });
    } else {
      window.onscroll = () => {};
    }
  });
};

import disableScrolling from "./disableScrolling";
export default mobileMenu;
