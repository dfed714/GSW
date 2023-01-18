// SLIDER
const leftBtn = document.querySelector(".slider-left-btn");
const rightBtn = document.querySelector(".slider-right-btn");
const slides = document.querySelectorAll(".slider-review");
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
        (s) => (s.style.transform = `translateX(${-100 * curSlide}%)`)
      );
    } else {
      curSlide = 0;
      slides.forEach((s) => (s.style.transform = `translateX(0%)`));
    }
  };

  // AUTOMATIC SLIDING

  setInterval(nextSlide, 4000);
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

// MENU TAB

const menuTab = document.querySelector(".menu-tab");
const xBtn = document.querySelector(".x-out-btn");
const hamburgerIcon = document.querySelector(".hamburger-icon");

xBtn.addEventListener("click", function () {
  xBtn.classList.add("display-none");
  menuTab.classList.add("display-none");
});

hamburgerIcon.addEventListener("click", function () {
  xBtn.classList.remove("display-none");
  menuTab.classList.remove("display-none");
});
