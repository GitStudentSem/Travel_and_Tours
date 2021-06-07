"use strict";
//Валидация
const validateForm = (email, password) => {
  //почта
  email.addEventListener("input", () => {
    email.value = email.value.replace(/[^a-z0-9@\-_.!~'*]/, "");
  });

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
export default validateForm;
