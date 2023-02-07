const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");
const toTop = document.querySelector(".to-top");

const navBtnOpenHandler = () => {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
};

navBtn.addEventListener("click", navBtnOpenHandler);

// back to top btn
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// activate wow js
new WOW().init();
