(function () {
  "use strict";

  /* ---------- Sticky header shadow ---------- */
  var header = document.getElementById("site-header");
  function updateHeaderShadow() {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function closeMenu() {
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    mobileNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
  }

  menuToggle.addEventListener("click", function () {
    var isOpen = mobileNav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close mobile menu when a nav link is tapped
  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* ---------- Quote form -> WhatsApp ---------- */
  var quoteForm = document.getElementById("quote-form");
  var formNote = document.getElementById("form-note");
  var WHATSAPP_NUMBER = "27713712811";

  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("q-name").value.trim();
    var phone = document.getElementById("q-phone").value.trim();
    var service = document.getElementById("q-service").value;
    var details = document.getElementById("q-details").value.trim();

    if (!name || !phone || !service || !details) {
      formNote.textContent = "Please fill in every field so we have what we need to help you.";
      formNote.style.color = "#DC2626";
      return;
    }

    var message =
      "Hi Solid Rock Construction, I'd like to request a quote.\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Service: " + service + "\n" +
      "Project details: " + details;

    var encodedMessage = encodeURIComponent(message);
    var whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedMessage;

    formNote.style.color = "#0C45A5";
    formNote.textContent = "Opening WhatsApp\u2026";

    window.open(whatsappUrl, "_blank", "noopener");
    quoteForm.reset();
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
