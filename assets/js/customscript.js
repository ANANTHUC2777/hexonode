//Nav Effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    document.querySelector("header").classList.add("effect");
  } else {
    document.querySelector("header").classList.remove("effect");
  }
});

//Custom Sidebar Hamburger
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("close");
  navToggle.addEventListener("click", () => {
    document.querySelector(".side-Nav").classList.add("side-Nav--width");
    document.querySelector(".aside-menu").classList.remove("invisible");
  });
  navClose.addEventListener("click", () => {
    document.querySelector(".side-Nav").classList.remove("side-Nav--width");
    document.querySelector(".aside-menu").classList.add("invisible");
  });
});

document.querySelectorAll("#sidenav-overlay, .close").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector(".side-Nav").classList.remove("side-Nav--width");
    document.querySelector(".aside-menu").classList.add("invisible");
  });
});

//Custom Tab
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll(".hextab-btn");
  const contents = document.querySelectorAll(".hextab-content");
  const wrap = document.querySelector(".hextab-wrap");
  let lastActiveIndex = 0;
  wrap.addEventListener("click", function (e) {
    let currentlyClicked = e.target;
    let currentlyClickedBtnId = currentlyClicked.dataset.id;

    if (currentlyClickedBtnId) {
      if (currentlyClicked.classList.contains("active")) {
        return;
      }
      btn.forEach((item) => {
        item.classList.remove("active", "slide-backward", "slide-forward");
      });
      currentlyClicked.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active", "slide-backward", "slide-forward");
      });

      let currentContent = document.getElementById(currentlyClickedBtnId);
      currentContent.classList.add("active");

      const activeBtn = document.querySelector(".hextab-btn.active");
      let btnArray = [...btn];
      const activeBtnIndex = btnArray.indexOf(activeBtn);

      if (lastActiveIndex !== null) {
        if (activeBtnIndex > lastActiveIndex) {
          currentlyClicked.classList.add("slide-forward");
        } else if (activeBtnIndex < lastActiveIndex) {
          currentlyClicked.classList.add("slide-backward");
        }

        if (activeBtnIndex > lastActiveIndex) {
          currentContent.classList.add("slide-forward");
        } else if (activeBtnIndex < lastActiveIndex) {
          currentContent.classList.add("slide-backward");
        }
      }

      lastActiveIndex = activeBtnIndex;
    }
  });
});

//Custom Accordion
document.addEventListener("DOMContentLoaded", function () {
  const mainWrap = document.querySelectorAll(".hex-accordion-item");
  mainWrap.forEach(function (currentEl) {
    const btn = currentEl.querySelector(".hex-accordion-head");
    btn.addEventListener("click", function () {
      mainWrap.forEach(function (item) {
        if (item !== currentEl) {
          item.classList.remove("show-text");
        }
      });

      currentEl.classList.toggle("show-text");
    });
  });
});

//Custom Slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".choose-slideItem");
  const prevButton = document.querySelector(".choose-slideLeftArr button");
  const nextButton = document.querySelector(".choose-slideRightArr button");
  const prevButtonDiv = document.querySelector(".choose-slideLeftArr");
  const nextButtonDiv = document.querySelector(".choose-slideRightArr ");
  let currentSlide = 0;

  const slideBtnWrapper = document.createElement("div");
  const slideRow = document.querySelector(".choose .row");

  slideRow.append(slideBtnWrapper);

  slides[currentSlide].classList.add("active");

  function updateButtonState() {
    if (currentSlide === 0) {
      prevButton.parentNode.classList.add("btn-disabled");
    } else {
      prevButton.parentNode.classList.remove("btn-disabled");
    }
    if (currentSlide === slides.length - 1) {
      nextButton.parentNode.classList.add("btn-disabled");
    } else {
      nextButton.parentNode.classList.remove("btn-disabled");
    }
  }

  function nextSlide() {
    const current = slides[currentSlide];
    current.classList.remove("active");
    current.classList.add("prev");

    currentSlide = (currentSlide + 1) % slides.length;

    const next = slides[currentSlide];
    next.classList.add("active");
    next.classList.remove("next");
    next.classList.add("next");

    setTimeout(() => {
      current.classList.remove("prev");
      next.classList.remove("next");
    }, 300);

    updateButtonState();
  }

  function prevSlide() {
    const current = slides[currentSlide];
    current.classList.remove("active");
    current.classList.add("next");

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    const prev = slides[currentSlide];
    prev.classList.add("active");
    prev.classList.remove("prev");
    prev.classList.add("prev");

    setTimeout(() => {
      current.classList.remove("next");
      prev.classList.remove("prev");
    }, 300);

    updateButtonState();
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  updateButtonState();

  const scr_width = window.innerWidth;
  if (scr_width < 1200) {
    console.log(window.innerWidth);
    slideBtnWrapper.append(prevButtonDiv);
    slideBtnWrapper.append(nextButtonDiv);
    slideBtnWrapper.classList.add("slideBtnWrapper");
    updateButtonState();
  }
});

//Custom Image Accordion
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".content");
  const aboutWrap = document.querySelector(".about");

  aboutWrap.addEventListener("click", function (e) {
    let currently__clicked = e.target;
    let currently__clicked__btnId = currently__clicked.dataset.id;
    if (currently__clicked__btnId) {
      btn.forEach((item) => {
        item.classList.remove("active");
      });
      currently__clicked.classList.add("active");
      if (contents) {
        contents.forEach((content) => {
          content.classList.remove("active");
        });
        let current__content = document.getElementById(currently__clicked__btnId);
        current__content.classList.add("active");
      }
    }
  });
});
