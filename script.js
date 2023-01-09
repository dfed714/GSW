// SLIDER
theSlider = function () {
  const slider = document.querySelector(".slider");
  const leftBtn = document.querySelector(".slider-left-btn");
  const rightBtn = document.querySelector(".slider-right-btn");
  const slides = document.querySelectorAll(".slider-pic");

  let curSlide = 1;
  const maxSlide = slides.length;

  nextSlide = function () {
    if (curSlide === maxSlide) {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 14) + 80
          }vw)`)
      );
      curSlide -= 2;
    } else if (curSlide === 1) {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 12) - 40
          }vw)`)
      );
      curSlide++;
    } else {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 14) - 40
          }vw)`)
      );
      curSlide++;
    }
    console.log(curSlide);
  };

  previousSlide = function () {
    if (curSlide === 1) {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 12) - 80
          }vw)`)
      );
      curSlide += 2;
    } else if (curSlide === 1) {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 12) + 40
          }vw)`)
      );
      curSlide--;
    } else {
      slides.forEach(
        (s) =>
          (s.style.transform = `translateX(${
            +String(s.style.transform).slice(11, 14) + 40
          }vw)`)
      );
      curSlide--;
    }
    console.log(curSlide);
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", previousSlide);
};

theSlider();

// NAV BAR

const navBar = document.querySelector(".nav-bar");
let scrolling = [];
window.addEventListener("scroll", function () {
  scrolling.push(window.pageYOffset);
  if (scrolling.length > 2) {
    scrolling = scrolling.slice(scrolling.length - 2);
  }
  removeNavBar();
});

removeNavBar = function () {
  if (scrolling.at(-1) > scrolling.at(-2)) {
    navBar.classList.remove("unhidden");
    navBar.classList.add("hidden");
  } else if (scrolling.at(-1) < scrolling.at(-2)) {
    navBar.classList.remove("hidden");
    navBar.classList.add("unhidden");
  }
};
