$(document).ready(function () {
  var burger = document.querySelector(".header__burger");
  burger.addEventListener("click", function () {
    document
      .querySelector(".header__menu")
      .classList.toggle("header__menu-visible");
  });

  var modalButton = $("[data-toggle='modal']");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  // Нажатие Escape
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay-visible");
      modalDialog.removeClass("modal__dialog-visible");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay-visible");
    modalDialog.addClass("modal__dialog-visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay-visible");
    modalDialog.removeClass("modal__dialog-visible");
  }
  // Swiper
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider__button-next",
      prevEl: ".slider__button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
