const registerWindow = () => {
  "use strict";
  const registerButton = document.querySelector(".header__login-register");
  const register = document.querySelector(".register");
  const overlay = document.querySelector(".overlay");
  const email = document.querySelector(".register__email");
  const password = document.querySelector(".register__password");
  const submitForm = document.querySelector(".register__submit-form");
  const showHide = document.querySelector(".register__show-hide");

  //Открытие окна логин
  registerButton.addEventListener("click", () => {
    register.classList.add("active");
    overlay.style.display = "block";
    validateForm(email, password);
    showHidePass(showHide, password);
    disableScrolling();
  });

  // Закрытие модального окна
  overlay.addEventListener("click", () => {
    register.classList.remove("active");
    overlay.style.display = "none";
    window.onscroll = () => {};
  });

  // Зарегестрироваться
  submitForm.addEventListener("click", () => {
    register.classList.remove("active");
    overlay.style.display = "none";
    window.onscroll = () => {};
  });
};

import showHidePass from "./showHidePass";
import disableScrolling from "./disableScrolling";
import validateForm from "./validateForm";
export default registerWindow;
