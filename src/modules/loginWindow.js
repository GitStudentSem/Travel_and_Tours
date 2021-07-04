"use strict";

//Регистрация
const loginWindow = () => {
  const loginButton = document.querySelector(".header__login-login");
  const loginWindow = document.querySelector(".login");
  const email = document.querySelector(".login__email");
  const password = document.querySelector(".login__password");
  const emailMessage = document.querySelector(".login__email-message");

  loginButton.addEventListener("click", () => {
    disableScrolling();
    loginWindow.classList.add("active");
    validateForm(email, password, emailMessage);
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
};
import disableScrolling from "./disableScrolling";
import validateForm from "./validateForm";
export default loginWindow;
