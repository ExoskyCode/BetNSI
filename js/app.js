const navToggler = document.querySelector(".navBtn");
const navLinksContainer = document.querySelector(".mobileNav");

const toggleNav = (e) => {
  navToggler.classList.toggle("open");
  navLinksContainer.classList.toggle("open");
  header.classList.toggle("height");
};
navToggler.addEventListener("click", toggleNav);