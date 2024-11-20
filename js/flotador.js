const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll(".flotador").forEach((flotador) => {
  observer.observe(flotador);
});
