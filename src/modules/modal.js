"use strict";

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

import disableScrolling from "./disableScrolling";
export default modal;
