// NAV BAR

// DISAPPEARING
const navBarDisappear = function () {
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
};

navBarDisappear();

// HOVERING

navBarHover = function () {
  const navLinks = document.querySelectorAll(".nav-bar-link");

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

const contactTab = document.querySelector("#contact-nav-link");
const contactMenu = document.querySelector(".contact-drop-down");
const backgroundPic = document.querySelector(".profile-pic");

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
