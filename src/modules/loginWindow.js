const loginWindow = () => {
  "use strict";
  const loginButton = document.querySelector(".header__login-login");
  const login = document.querySelector(".login");
  const overlay = document.querySelector(".overlay");
  const email = document.querySelector(".login__email");
  const password = document.querySelector(".login__password");
  const submitForm = document.querySelector(".login__submit-form");
  const showHide = document.querySelector(".login__show-hide");
  //Открытие окна логин
  loginButton.addEventListener("click", () => {
    login.classList.add("active");
    overlay.style.display = "block";
    validateForm(email, password);
    showHidePass(showHide, password);
    disableScrolling();
  });

  // Закрытие модального окна
  overlay.addEventListener("click", () => {
    login.classList.remove("active");
    overlay.style.display = "none";
    window.onscroll = () => {};
  });

  //Войти
  submitForm.addEventListener("click", () => {
    login.classList.remove("active");
    overlay.style.display = "none";
    window.onscroll = () => {};
  });
};
import showHidePass from "./showHidePass";
import disableScrolling from "./disableScrolling";
import validateForm from "./validateForm";
export default loginWindow;
