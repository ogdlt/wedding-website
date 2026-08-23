(function () {
  var track = document.querySelector("[data-home-carousel-track]");
  if (!track) return;

  var slides = Array.prototype.slice.call(
    track.querySelectorAll("[data-home-carousel-slide]")
  );
  if (slides.length < 2) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) return;

  var firstSlideClone = slides[0].cloneNode(true);
  firstSlideClone.setAttribute("aria-hidden", "true");
  firstSlideClone.removeAttribute("data-home-carousel-slide");
  track.appendChild(firstSlideClone);

  var currentSlide = 0;
  var timerId = null;

  function updateVisibleSlide() {
    var visibleSlide = currentSlide % slides.length;

    slides.forEach(function (slide, index) {
      slide.setAttribute("aria-hidden", String(index !== visibleSlide));
    });
  }

  function prepareNextImage() {
    var nextSlide = slides[(currentSlide + 1) % slides.length];
    var nextImage = nextSlide.querySelector("img");

    if (nextImage) {
      nextImage.loading = "eager";
    }
  }

  function advanceCarousel() {
    currentSlide += 1;
    track.style.transform = "translateX(-" + currentSlide * 100 + "%)";
    updateVisibleSlide();
    prepareNextImage();
  }

  function startCarousel() {
    if (timerId !== null) return;
    timerId = window.setInterval(advanceCarousel, 2000);
  }

  function stopCarousel() {
    if (timerId === null) return;
    window.clearInterval(timerId);
    timerId = null;
  }

  track.addEventListener("transitionend", function (event) {
    if (event.target !== track || event.propertyName !== "transform") return;
    if (currentSlide !== slides.length) return;

    track.style.transition = "none";
    currentSlide = 0;
    track.style.transform = "translateX(0)";
    void track.offsetWidth;
    track.style.transition = "";
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopCarousel();
    } else {
      startCarousel();
    }
  });

  prepareNextImage();
  startCarousel();
})();
