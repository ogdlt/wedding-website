(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;

  var toggle = header.querySelector(".nav-toggle");
  var nav = header.querySelector(".main-nav");
  if (!toggle || !nav) return;

  header.setAttribute("data-nav-ready", "");

  function setMenuOpen(isOpen, returnFocus) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
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

  var desktopQuery = window.matchMedia("(min-width: 701px)");
  function closeMenuOnDesktop(event) {
    if (event.matches) {
      setMenuOpen(false, false);
    }
  }

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", closeMenuOnDesktop);
  } else {
    desktopQuery.addListener(closeMenuOnDesktop);
  }
})();
