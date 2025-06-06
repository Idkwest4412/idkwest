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

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, easing: "ease-in-out", once: true });

  const sections = document.querySelectorAll("main > section, main > h2");
  const navLinks = document.querySelectorAll("nav a");

  function activateNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if(navLinks[index]) navLinks[index].classList.add("active");
  }

  activateNavLink();
  window.addEventListener("scroll", activateNavLink);

  // Smooth scrolling for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    });
  });
});

const cursor = document.getElementById("custom-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
    cursor.style.backgroundColor = "rgba(114, 137, 218, 0.3)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.backgroundColor = "transparent";
  });
});

