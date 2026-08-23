(function () {
  const siteNav = document.querySelector(".site-nav");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const mobilePanel = document.querySelector("#mobile-nav-panel");

  if (siteNav && mobileToggle && mobilePanel) {
    const setMobileMenu = (isOpen) => {
      siteNav.classList.toggle("is-open", isOpen);
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
      mobilePanel.hidden = !isOpen;
    };

    mobileToggle.addEventListener("click", () => {
      setMobileMenu(mobileToggle.getAttribute("aria-expanded") !== "true");
    });

    mobilePanel.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMobileMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMobileMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 621px)").matches) setMobileMenu(false);
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".section-reveal, .reveal-item").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  const revealEls = document.querySelectorAll(".section-reveal, .reveal-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -14% 0px",
    threshold: .12
  });

  revealEls.forEach((el) => observer.observe(el));
}());
