var toggle_button = document.querySelector(".page-header__toggle");
var main_nav = document.querySelector(".main-nav");
var page_header_heading = document.querySelector(".page-header__heading");
var page_header = document.querySelector(".page-header");
var page_header_inner = document.querySelector(".page-header--inner");
var page_header_menu = document.querySelector(".page-header__menu");
var popup = document.querySelector(".popup");
var popup_container = document.querySelector(".popup__container");
var popup_error = document.querySelector(".popup-error");
var popup_error_container = document.querySelector(".popup-error__container");
var popup_error_button = document.querySelector(".popup-error__button");
var popup_button = document.querySelector(".popup__button");
var form = document.querySelector(".form");
var form_button = document.querySelector(".form__button");
var first_name = document.querySelector("[name=first-name]");
var last_name = document.querySelector("[name=last-name]");
var mail = document.querySelector("[name=mail]");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  main_nav.classList.remove("main-nav--visible");
  page_header_heading.classList.remove("page-header__heading--background");
  page_header_menu.classList.remove("page-header__menu--position");
  page_header.classList.remove("page-header--position");
  toggle_button.classList.remove("page-header__toggle--open");
  if (form) {
    popup.classList.remove("popup--visible");
    popup_container.classList.remove("popup__container--visible");
    popup_error.classList.remove("popup-error--visible");
    popup_error_container.classList.remove("popup-error__container--visible");
    page_header_inner.classList.remove("page-header--inner-position");
    first_name.classList.remove("form__input--error");
    last_name.classList.remove("form__input--error");
    mail.classList.remove("form__input--error");
  }
});

toggle_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  main_nav.classList.toggle("main-nav--visible");
  page_header_heading.classList.toggle("page-header__heading--background");
  page_header_menu.classList.toggle("page-header__menu--position");
  page_header.classList.toggle("page-header--position");
  toggle_button.classList.toggle("page-header__toggle--open");
  if (page_header_inner) {
    page_header_inner.classList.toggle("page-header--inner-position");
  }
});

if (form) {
  form_button.addEventListener("click", function (evt) {
    if (!first_name.value || !last_name.value || !mail.value) {
      evt.preventDefault();
      popup_error.classList.remove("popup-error--visible");
      popup_error_container.classList.remove("popup-error__container--visible");
      popup_error.offsetWidth = popup_error.offsetWidth;
      popup_error.classList.add("popup-error--visible");
      popup_error_container.classList.add("popup-error__container--visible");
      first_name.classList.add("form__input--error");
      last_name.classList.add("form__input--error");
      mail.classList.add("form__input--error");
      if (first_name.value) {
        first_name.classList.remove("form__input--error");
      }
      if (last_name.value) {
        last_name.classList.remove("form__input--error");
      }
      if (mail.value) {
        mail.classList.remove("form__input--error");
      }
    } else {
      evt.preventDefault();
      popup.classList.toggle("popup--visible");
      popup_container.classList.toggle("popup__container--visible");
      if (first_name.classList.contains("form__input--error")) {
        first_name.classList.remove("form__input--error");
      }
      if (last_name.classList.contains("form__input--error")) {
        last_name.classList.remove("form__input--error");
      }
      if (mail.classList.contains("form__input--error")) {
        mail.classList.remove("form__input--error");
      }
    }
  });

  popup_error_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup_error.classList.contains("popup-error--visible")) {
      popup_error.classList.remove("popup-error--visible");
    }
    if (popup_error_container.classList.contains("popup-error__container--visible")) {
      popup_error_container.classList.remove("popup-error__container--visible");
    }
  });

  popup_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("popup--visible")) {
      popup.classList.remove("popup--visible");
    }
    if (popup_container.classList.contains("popup__container--visible")) {
      popup_container.classList.remove("popup__container--visible");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup_error.classList.contains("popup-error--visible")) {
        popup_error.classList.remove("popup-error--visible");
      }
      if (popup_error_container.classList.contains("popup-error__container--visible")) {
        popup_error_container.classList.remove("popup-error__container--visible");
      }
      if (popup.classList.contains("popup--visible")) {
        popup.classList.remove("popup--visible");
      }
      if (popup_container.classList.contains("popup__container--visible")) {
        popup_container.classList.remove("popup__container--visible");
      }
    }
  });
}
