"use strict";

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
export default smoothScroll;