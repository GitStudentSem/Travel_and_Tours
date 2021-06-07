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

  //Валидация
  const validateForm = (email, password) => {
    //почта
    email.addEventListener("blur", () => {
      // Защита от пустой строки
      if (email.value !== "") {
        const validate = (email) => {
          // Проверка на правильность вида e-mail
          const reg =
            /^([a-z0-9@\-_.!~'*]+\.)*[a-z0-9@\-_.!~'*]+@[a-z0-9@\-_.!~'*]+(\.[a-z0-9@\-_.!~'*]+)*\.[a-z]{2,6}$/;
          if (reg.test(email.value) === false) {
            alert("Enter correct e-mai");
            return false;
          }
        };
        validate(email);
      }
    });
    // Пароль
    password.addEventListener("input", () => {
      password.value = password.value.replace(/[^a-z0-9]/, "");
    });
  };

  // Модальное окно
  const modal = () => {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");

    body.addEventListener("click", (event) => {
      let target = event.target;

      if (target.closest("[data-toggle='modal']")) {
        modal.classList.add("active");
        disableScrolling();
      } else if (target.matches(".modal__window-close")) {
        modal.classList.remove("active");
        window.onscroll = () => {};
      } else if (target.matches(".active")) {
        modal.classList.remove("active");
        window.onscroll = () => {};
      }
    });
  };
  modal();

  //Регистрация
  const loginWindow = () => {
    const loginButton = document.querySelector(".header__login-login");
    const loginWindow = document.querySelector(".login");
    const email = document.querySelector(".login__email");
    const password = document.querySelector(".login__password");

    loginButton.addEventListener("click", () => {
      disableScrolling();
      loginWindow.classList.add("active");
      validateForm(email, password);
    });

    //Слушатель внутри окна
    loginWindow.addEventListener("click", (event) => {
      let target = event.target;
      if (target.closest(".login__window-close")) {
        loginWindow.classList.remove("active");
        email.value = "";
        password.value = "";
        window.onscroll = () => {};
      } else if (target.matches(".active")) {
        loginWindow.classList.remove("active");
        email.value = "";
        password.value = "";
        window.onscroll = () => {};
      }
    });

    //Слушатель внутри окна
  };
  loginWindow();

  // Вход залогиненого пользователя
  const registerWindow = () => {
    const registerButton = document.querySelector(".header__login-register");
    const registerWindow = document.querySelector(".register");
    const email = document.querySelector(".register__email");
    const password = document.querySelector(".register__password");

    registerButton.addEventListener("click", () => {
      disableScrolling();
      registerWindow.classList.add("active");
      validateForm(email, password);
    });

    registerWindow.addEventListener("click", (event) => {
      let target = event.target;
      if (target.closest(".register__window-close")) {
        registerWindow.classList.remove("active");
        email.value = "";
        password.value = "";
        window.onscroll = () => {};
      } else if (target.matches(".active")) {
        registerWindow.classList.remove("active");
        email.value = "";
        password.value = "";
        window.onscroll = () => {};
      }
    });
  };
  registerWindow();
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
