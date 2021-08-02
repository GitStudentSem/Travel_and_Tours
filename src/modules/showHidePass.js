"use strict";
const showHidePass = (showHideButton, password) => {
  showHideButton.addEventListener("click", (event) => {
    event.preventDefault();
    showHideButton.classList.toggle("view");

    if (password.getAttribute("type") === "password") {
      password.setAttribute("type", "text");
    } else {
      password.setAttribute("type", "password");
    }
  });
};
export default showHidePass;
