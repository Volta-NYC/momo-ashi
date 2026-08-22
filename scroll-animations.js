(function () {
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
