"use strict";

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
import disableScrolling from "./disableScrolling";
import validateForm from "./validateForm";
export default registerWindow;
