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

  // Плавный скролл
  const smoothScroll = () => {
    const scrollLinks = document.querySelectorAll("a.header__navbar-link");

    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", (event) => {
        event.preventDefault();
        const id = scrollLink.getAttribute("href");
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      });
    }
  };
  smoothScroll();

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
  mobileMenu();

  // Слайдер
  const slider = () => {
    const prevSlide = document.querySelector(".reviews__buttons-prev");
    const nextSlide = document.querySelector(".reviews__buttons-next");
    const slides = Array.from(document.querySelectorAll(".review"));
    let i = 0;

    prevSlide.addEventListener("click", () => {
      slides[i].classList.remove("review__active");
      i--;
      if (i <= 0) {
        i = slides.length - 1;
      }
      slides[i].classList.add("review__active");
    });

    nextSlide.addEventListener("click", () => {
      slides[i].classList.remove("review__active");
      i++;
      if (i > slides.length - 1) {
        i = 0;
      }
      slides[i].classList.add("review__active");
    });
  };
  slider();
};
