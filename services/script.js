const menuTab = document.querySelector(".menu-tab");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const xBtn = document.querySelector(".x-out-btn");

hamburgerIcon.addEventListener("click", function () {
  console.log("bars clicked");
  menuTab.classList.remove("display-none");
  xBtn.classList.remove("display-none");
});

xBtn.addEventListener("click", function () {
  console.log("x clicked");
  menuTab.classList.add("display-none");
  xBtn.classList.add("display-none");
});
