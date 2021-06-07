"use strict";
// Слайдер
const slider = () => {
  const prevSlide = document.querySelector(".reviews__buttons-prev");
  const nextSlide = document.querySelector(".reviews__buttons-next");
  const slides = Array.from(document.querySelectorAll(".review"));
  let i = 0;

  prevSlide.addEventListener("click", () => {
    slides[i].classList.remove("review__active");
    i--;
    if (i <= 0) {
      i = slides.length - 1;
    }
    slides[i].classList.add("review__active");
  });

  nextSlide.addEventListener("click", () => {
    slides[i].classList.remove("review__active");
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    slides[i].classList.add("review__active");
  });
};
export default slider;
