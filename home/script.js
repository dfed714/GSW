// SLIDER
const leftBtn = document.querySelector(".slider-left-btn");
const rightBtn = document.querySelector(".slider-right-btn");
const slides = document.querySelectorAll(".slider-pic");
const navLinks = document.querySelectorAll(".nav-bar-link");
const contactTab = document.querySelector("#contact-nav-link");
const contactMenu = document.querySelector(".contact-drop-down");
const backgroundPic = document.querySelector(".profile-pic");
const navBar = document.querySelector(".nav-bar");

theSlider = function () {
  const maxSlide = slides.length;
  let curSlide = 0;

  const nextSlide = function () {
    if (curSlide < maxSlide - 1) {
      curSlide += 1;
      slides.forEach(
        (s, i) => (s.style.transform = `translate(-${100 * curSlide}%)`)
      );
    } else {
      slides.forEach((s, i) => (s.style.transform = `translate(0%)`));
      curSlide = 0;
    }
  };

  const previousSlide = function () {
    if (curSlide === 0) {
      slides.forEach((s, i) => (s.style.transform = `translate(-200%)`));
      curSlide = 2;
    } else if (curSlide === 2) {
      curSlide -= 1;
      slides.forEach((s, i) => (s.style.transform = `translate(-100%)`));
    } else {
      curSlide -= 1;
      slides.forEach(
        (s, i) => (s.style.transform = `translate(${100 * curSlide}%)`)
      );
    }
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", previousSlide);

  // AUTOMATIC SLIDING

  // setInterval(nextSlide, 7000);
};

theSlider();

// NAV BAR

// DISAPPEARING

const navBarDisappear = function () {
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
};

navBarDisappear();

// HOVERING

navBarHover = function () {
  navLinks.forEach((x, i) =>
    x.addEventListener("mouseover", function () {
      navLinks.forEach((y) => y.classList.remove("underline"));
      navLinks[i].classList.add("underline");
    })
  );

  navLinks.forEach((x) =>
    x.addEventListener("mouseleave", function () {
      navLinks.forEach((x) => x.classList.remove("underline"));
    })
  );
};

navBarHover();

// HAMBURGER HIDE FUNC

const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerIcon.addEventListener("click", function () {
  console.log("click");
});
