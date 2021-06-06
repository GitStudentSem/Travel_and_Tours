window.onload = function () {
  "use strict";
  // Блокировка скролла
  const disableScrolling = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  };
  // Модальное окно
  const modal = () => {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");

    body.addEventListener("click", (event) => {
      let target = event.target;

      if (target.closest("[data-toggle='modal']")) {
        event.preventDefault();
        modal.classList.add("active");
        disableScrolling();
        // Нажатие на крестик
      } else if (target.matches(".modal__window-close")) {
        event.preventDefault();
        modal.classList.remove("active");
        window.onscroll = () => {};
      } else if (target.matches(".active")) {
        event.preventDefault();
        modal.classList.remove("active");
        window.onscroll = () => {};
      }
    });
  };
  modal();

  // Мобильное меню
  const mobileMenu = () => {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");

    burger.addEventListener("click", () => {
      menu.classList.toggle("header__menu-visible");

      if (menu.classList.contains("header__menu-visible")) {
        console.log(1);
        disableScrolling();
      } else {
        window.onscroll = () => {};
      }
    });
  };
  mobileMenu();
};
