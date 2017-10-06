var toggle_button = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var page_header_wrapper = document.querySelector(".page-header__logo-wrapper");
var page_header = document.querySelector(".page-header");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  popup.classList.remove("main-nav--visible");
  page_header_wrapper.classList.remove("page-header__logo-wrapper--background");
  page_header.classList.remove("page-header--position");
  page_header.classList.remove("page-header--add-picture-position");
  toggle_button.classList.remove("page-header__toggle--open");
});

toggle_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("main-nav--visible");
  page_header_wrapper.classList.toggle("page-header__logo-wrapper--background");
  page_header.classList.toggle("page-header--position");
  page_header.classList.toggle("page-header--add-picture-position");
/*  if (toggle_button.classList.contains("page-header__toggle--open")) {
    toggle_button.classList.remove("page-header__toggle--open");
  };*/
  toggle_button.classList.toggle("page-header__toggle--open");
});
