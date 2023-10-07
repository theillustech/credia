const nav = document.querySelector("#top-nav");
let scrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  scrollPos = window.scrollY;
  if (scrollPos > 50) {
    nav.classList.add("onscroll-background");
  } else {
    nav.classList.remove("onscroll-background");
  }
});

const currentUrl = document.location;
const navLinks = document.querySelectorAll(".nav-link > a");

navLinks.forEach((navLink) => {
  if (navLink.href == currentUrl) {
    navLink.classList.add("on-page-nav-link");
  }
});

let li;
const dropDownLinks = document.querySelectorAll(".dropdown-link > a");
dropDownLinks.forEach((dropDownLink) => {
  if (dropDownLink.href == currentUrl) {
    dropDownLink.classList.add("on-page-dropdown-link");
    li = dropDownLink.parentElement.parentElement.parentElement.parentElement;
    li.classList.add("on-page-nav-link");
  }
});

const aboutLink = document.querySelector(".fa-caret-down").parentElement;
let click = 0;
aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
});