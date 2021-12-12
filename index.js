let s_bar_main = document.querySelector(".side-bar-main");
let s_bar_shadow = document.querySelector(".side-bar-shadow");

const sideBarOpener = () => {
  s_bar_main.classList.remove("side-close");
  s_bar_main.classList.add("side-open");
  s_bar_shadow.style.display = "block";
};

const sideBarCloser = () => {
  s_bar_main.classList.remove("side-open");
  s_bar_main.classList.add("side-close");
  s_bar_shadow.style.display = "none";
};
