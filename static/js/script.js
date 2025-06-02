document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = 1;
  }, 100);
});
