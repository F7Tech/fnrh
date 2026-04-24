const accordionButtons = document.querySelectorAll(".faq__question");

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq__item");
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    accordionButtons.forEach((otherButton) => {
      otherButton.setAttribute("aria-expanded", "false");
      otherButton.closest(".faq__item")?.classList.remove("is-open");
    });

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      item?.classList.add("is-open");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
