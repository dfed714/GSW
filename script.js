const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".slider-left-btn");
const rightBtn = document.querySelector(".slider-right-btn");
const slides = document.querySelectorAll(".slider-pic");
const slideOne = document.querySelector(".slider-pic-1");
const slideTwo = document.querySelector(".slider-pic-2");
const slideThree = document.querySelector(".slider-pic-3");

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };

// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   goToSlide(curSlide);
// };

leftBtn.addEventListener("click", function () {
  slides.forEach((x) => (x.style.transform = "translateX(-100%)"));
});
