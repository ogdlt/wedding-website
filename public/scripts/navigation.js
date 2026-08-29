(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var toggle = header.querySelector(".nav-toggle");
  var nav = header.querySelector(".main-nav");
  if (!toggle || !nav) return;

  header.setAttribute("data-nav-ready", "");

  function translate(source) {
    return window.weddingI18n ? window.weddingI18n.t(source) : source;
  }

  function setMenuOpen(isOpen, returnFocus) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      translate(isOpen ? "Close navigation menu" : "Open navigation menu")
    );

    if (!isOpen && returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", function () {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true", false);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setMenuOpen(false, false);
    }
  });

  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) {
      setMenuOpen(false, false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener("wedding:languagechange", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute(
      "aria-label",
      translate(isOpen ? "Close navigation menu" : "Open navigation menu")
    );
  });

})();
