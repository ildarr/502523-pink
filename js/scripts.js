var toggle_button = document.querySelector(".page-header__toggle");
var popup = document.querySelector(".main-nav");
var page_header_heading = document.querySelector(".page-header__heading");
var page_header = document.querySelector(".page-header");
var page_header_inner = document.querySelector(".page-header--inner");
var page_header_menu = document.querySelector(".page-header__menu");

document.addEventListener("DOMContentLoaded", function (evt) {
  evt.preventDefault();
  popup.classList.remove("main-nav--visible");
  page_header_heading.classList.remove("page-header__heading--background");
  page_header_menu.classList.remove("page-header__menu--position");
  page_header.classList.remove("page-header--position");
  page_header_inner.classList.remove("page-header--inner-position");
  toggle_button.classList.remove("page-header__toggle--open");
});

toggle_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("main-nav--visible");
  page_header_heading.classList.toggle("page-header__heading--background");
  page_header_menu.classList.toggle("page-header__menu--position");
  page_header.classList.toggle("page-header--position");
  page_header_inner.classList.toggle("page-header--inner-position");
  toggle_button.classList.toggle("page-header__toggle--open");
});
