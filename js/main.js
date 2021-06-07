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

  // Слайдер
  const slider = () => {
    const prevSlide = document.querySelector(".reviews__buttons-prev");
    const nextSlide = document.querySelector(".reviews__buttons-next");
    const slides = Array.from(document.querySelectorAll(".review"));
    let i = 0;

    const deleteSlide = () => {
      if (slides[i].classList.contains("review__active")) {
        slides[i].classList.remove("review__active");
      }
    };

    prevSlide.addEventListener("click", () => {
      deleteSlide();
      i--;
      if (i <= 0) {
        i = 2;
      }
      slides[i].classList.add("review__active");
    });

    nextSlide.addEventListener("click", () => {
      deleteSlide();
      i++;
      if (i > 2) {
        i = 0;
      }
      slides[i].classList.add("review__active");
    });
  };
  slider();
};
