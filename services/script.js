const menuTab = document.querySelector(".menu-tab");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const xBtn = document.querySelector(".x-out-btn");

hamburgerIcon.addEventListener("click", function () {
  menuTab.classList.remove("display-none");
  xBtn.classList.remove("display-none");
});

xBtn.addEventListener("click", function () {
  menuTab.classList.add("display-none");
  xBtn.classList.add("display-none");
});

console.log(document.getElementsByClassName("nav-bar"));
