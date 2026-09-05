(function () {
  "use strict";

  var ACCESS_KEY = "weddingGuestAccess";
  var ACCESS_TOKEN = "valencia-2027-v1";
  var PASSWORD_HASH = "44486de9e751cbfcf0d4626aede5ad9aafcd469a1fb1f7b752d7d59924a79f9b";

  var copy = {
    en: {
      intro: "Enter the guest password to access our wedding website.",
      label: "Password",
      button: "Enter",
      checking: "Checking...",
      error: "That password is not correct. Please try again."
    },
    es: {
      intro: "Introduce la contraseña de invitados para acceder a nuestra web de boda.",
      label: "Contraseña",
      button: "Entrar",
      checking: "Comprobando...",
      error: "La contraseña no es correcta. Inténtalo de nuevo."
    },
    fr: {
      intro: "Saisissez le mot de passe des invités pour accéder au site de notre mariage.",
      label: "Mot de passe",
      button: "Entrer",
      checking: "Vérification...",
      error: "Ce mot de passe est incorrect. Veuillez réessayer."
    },
    fa: {
      intro: "برای ورود به وب‌سایت عروسی ما، رمز مهمانان را وارد کنید.",
      label: "رمز عبور",
      button: "ورود",
      checking: "در حال بررسی...",
      error: "رمز عبور صحیح نیست. دوباره تلاش کنید."
    }
  };

  function getSessionAccess() {
    try {
      return sessionStorage.getItem(ACCESS_KEY) === ACCESS_TOKEN;
    } catch (error) {
      return false;
    }
  }

  function saveSessionAccess() {
    try {
      sessionStorage.setItem(ACCESS_KEY, ACCESS_TOKEN);
    } catch (error) {
      // Access still works for the current page if session storage is unavailable.
    }
  }

  function getLanguage() {
    try {
      var stored = localStorage.getItem("weddingLanguage");
      return copy[stored] ? stored : "en";
    } catch (error) {
      return "en";
    }
  }

  function hash(value) {
    var bytes = new TextEncoder().encode(value);
    return crypto.subtle.digest("SHA-256", bytes).then(function (buffer) {
      return Array.from(new Uint8Array(buffer)).map(function (byte) {
        return byte.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function unlock(gate) {
    saveSessionAccess();
    gate.classList.add("is-unlocking");
    document.documentElement.classList.remove("password-gate-locked");
    document.dispatchEvent(new CustomEvent("wedding:guest-access-granted"));
    window.setTimeout(function () {
      gate.remove();
    }, 360);
  }

  if (getSessionAccess()) return;

  document.documentElement.classList.add("password-gate-locked");

  document.addEventListener("DOMContentLoaded", function () {
    var language = getLanguage();
    var strings = copy[language];
    var gate = document.createElement("div");
    gate.className = "password-gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-labelledby", "password-gate-title");
    if (language === "fa") gate.setAttribute("dir", "rtl");

    gate.innerHTML =
      '<div class="password-gate-card">' +
        '<div class="password-gate-monogram" aria-hidden="true">O&amp;S</div>' +
        '<h1 class="password-gate-title" id="password-gate-title">Olimpia &amp; Shayann</h1>' +
        '<p class="password-gate-copy">' + strings.intro + '</p>' +
        '<form class="password-gate-form">' +
          '<label class="password-gate-label" for="guest-password">' + strings.label + '</label>' +
          '<input class="password-gate-input" id="guest-password" type="password" autocomplete="current-password" required />' +
          '<button class="password-gate-button" type="submit">' + strings.button + '</button>' +
          '<p class="password-gate-error" role="alert" aria-live="polite"></p>' +
        '</form>' +
      '</div>';

    document.body.appendChild(gate);

    var form = gate.querySelector("form");
    var input = gate.querySelector("input");
    var button = gate.querySelector("button");
    var error = gate.querySelector(".password-gate-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      error.textContent = "";
      button.disabled = true;
      button.textContent = strings.checking;

      hash(input.value).then(function (result) {
        if (result === PASSWORD_HASH) {
          unlock(gate);
          return;
        }

        input.value = "";
        input.setAttribute("aria-invalid", "true");
        error.textContent = strings.error;
        button.disabled = false;
        button.textContent = strings.button;
        input.focus();
      }).catch(function () {
        error.textContent = strings.error;
        button.disabled = false;
        button.textContent = strings.button;
      });
    });

    input.addEventListener("input", function () {
      input.removeAttribute("aria-invalid");
      error.textContent = "";
    });

    input.focus();
  });
})();
