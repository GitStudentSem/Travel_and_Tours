"use strict";
//Валидация
const validateForm = (email, password, emailMessage) => {
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
          emailMessage.textContent = "Incorrect email";
          emailMessage.classList.remove("succses");
          emailMessage.classList.add("error");
          return false;
        } else {
          emailMessage.textContent = "Correct email";
          emailMessage.classList.remove("error");
          emailMessage.classList.add("succses");
        }
      };
      validate(email);
    }
  });
  // Пароль
  password.addEventListener("input", () => {
    password.value = password.value.replace(/[^a-z0-9]/gi, "");
  });
};
export default validateForm;
