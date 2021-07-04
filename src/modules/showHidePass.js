"use strict";
const showHidePass = () => {
  const showHide = document.querySelector(".password__btn");
  const input = document.querySelector(".login__password");

  showHide.addEventListener("click", (event) => {
    event.preventDefault();
    showHide.classList.toggle("view");

    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
};
export default showHidePass;
