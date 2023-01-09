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
  let curSlide = 1;
  const maxSlide = slides.length;

  changeSlide = function (start, end, value) {
    slides.forEach(
      (s) =>
        (s.style.transform = `translateX(${
          +String(s.style.transform).slice(start, end) + value
        }vw)`)
    );
  };

  nextSlide = function () {
    if (curSlide === maxSlide) {
      changeSlide(11, 14, 80);
      curSlide -= 2;
    } else if (curSlide === 1) {
      changeSlide(11, 12, -40);
      curSlide++;
    } else {
      changeSlide(11, 14, -40);
      curSlide++;
    }
  };

  previousSlide = function () {
    if (curSlide === 1) {
      changeSlide(11, 12, -80);
      curSlide += 2;
    } else if (curSlide === 1) {
      changeSlide(11, 12, 40);
      curSlide--;
    } else {
      changeSlide(11, 14, 40);
      curSlide--;
    }
  };

  rightBtn.addEventListener("click", nextSlide);
  leftBtn.addEventListener("click", previousSlide);
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

// CONTACT DROP DOWN MENU
contactFunc = function () {
  let mouseover = false;

  contactTab.addEventListener("mouseover", function () {
    contactMenu.classList.remove("hidden");
    mouseover = true;
  });
  contactTab.addEventListener("mouseleave", function () {
    contactMenu.classList.add("hidden");
  });

  contactMenu.addEventListener("mouseover", function () {
    if (mouseover === true) {
      contactMenu.classList.remove("hidden");
    }
  });

  backgroundPic.addEventListener("mouseover", function () {
    contactMenu.classList.add("hidden");
    mouseover = false;
  });
};

contactFunc();
