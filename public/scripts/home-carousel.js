(function () {
  var carousel = document.querySelector("[data-home-carousel]");
  if (!carousel) return;

  var track = carousel.querySelector("[data-home-carousel-track]");
  if (!track) return;

  var slides = Array.prototype.slice.call(
    track.querySelectorAll("[data-home-carousel-slide]")
  );
  if (slides.length < 2) return;

  var firstSlideClone = slides[0].cloneNode(true);
  firstSlideClone.setAttribute("aria-hidden", "true");
  firstSlideClone.removeAttribute("data-home-carousel-slide");
  track.appendChild(firstSlideClone);

  var previousButton = carousel.querySelector("[data-home-carousel-previous]");
  var nextButton = carousel.querySelector("[data-home-carousel-next]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var mobileViewport = window.matchMedia("(max-width: 700px)");
  var currentSlide = 0;
  var timerId = null;
  var completedAutomaticCycle = false;
  var isReturningToFirstSlide = false;
  var hasNudgedPage = false;

  function showSlide(index) {
    var wrapsForward = index >= slides.length;
    var wrapsBackward = index < 0;
    currentSlide = (index + slides.length) % slides.length;

    if (wrapsForward && !reducedMotion.matches) {
      isReturningToFirstSlide = true;
      track.style.transform = "translateX(-" + slides.length * 100 + "%)";
    } else if (wrapsBackward) {
      track.style.transition = "none";
      track.style.transform = "translateX(-" + currentSlide * 100 + "%)";
      void track.offsetWidth;
      track.style.transition = "";
    } else {
      track.style.transform = "translateX(-" + currentSlide * 100 + "%)";
    }

    slides.forEach(function (slide, slideIndex) {
      slide.setAttribute("aria-hidden", String(slideIndex !== currentSlide));
    });

    var nextSlide = slides[(currentSlide + 1) % slides.length];
    var nextImage = nextSlide.querySelector("img");

    if (nextImage) {
      nextImage.loading = "eager";
    }
  }

  function stopCarousel() {
    if (timerId === null) return;
    window.clearInterval(timerId);
    timerId = null;
  }

  function showControls() {
    if (previousButton) previousButton.hidden = false;
    if (nextButton) nextButton.hidden = false;
  }

  function nudgeMobilePage() {
    if (!mobileViewport.matches || hasNudgedPage || window.scrollY > 24) return;

    hasNudgedPage = true;
    window.setTimeout(function () {
      if (!mobileViewport.matches || window.scrollY > 24) return;

      window.scrollBy({
        top: Math.min(140, window.innerHeight * 0.18),
        behavior: "smooth"
      });
    }, 800);
  }

  function finishAutomaticCycle() {
    stopCarousel();
    completedAutomaticCycle = true;
    showControls();
    nudgeMobilePage();
  }

  function advanceCarousel() {
    showSlide(currentSlide + 1);

    if (currentSlide === slides.length - 1) {
      finishAutomaticCycle();
    }
  }

  function startCarousel() {
    if (timerId !== null || completedAutomaticCycle) return;
    timerId = window.setInterval(advanceCarousel, 2000);
  }

  track.addEventListener("transitionend", function (event) {
    if (event.target !== track || event.propertyName !== "transform") return;
    if (!isReturningToFirstSlide) return;

    isReturningToFirstSlide = false;
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    void track.offsetWidth;
    track.style.transition = "";
  });

  if (previousButton) {
    previousButton.addEventListener("click", function () {
      showSlide(currentSlide - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      showSlide(currentSlide + 1);
    });
  }

  if (reducedMotion.matches) {
    completedAutomaticCycle = true;
    showControls();
    return;
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });

  showSlide(0);
  startCarousel();
})();
