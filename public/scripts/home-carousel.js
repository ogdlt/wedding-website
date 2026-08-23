(function () {
  var carousel = document.querySelector("[data-home-carousel]");
  if (!carousel) return;

  var track = carousel.querySelector("[data-home-carousel-track]");
  if (!track) return;

  var slides = Array.prototype.slice.call(
    track.querySelectorAll("[data-home-carousel-slide]")
  );
  if (slides.length < 2) return;

  var previousButton = carousel.querySelector("[data-home-carousel-previous]");
  var nextButton = carousel.querySelector("[data-home-carousel-next]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var currentSlide = 0;
  var timerId = null;
  var completedAutomaticCycle = false;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + currentSlide * 100 + "%)";

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

  function finishAutomaticCycle() {
    stopCarousel();
    completedAutomaticCycle = true;
    showControls();
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
