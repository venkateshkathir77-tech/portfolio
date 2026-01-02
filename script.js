const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll("nav a");

/* SHOW HOME ON PAGE LOAD */
window.addEventListener("load", () => {
  document.getElementById("home").classList.add("show");

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#home") {
      link.classList.add("active");
    }
  });
});

/* SCROLL HANDLER */
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

    if (section.getBoundingClientRect().top < window.innerHeight - 120) {
      section.classList.add("show");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
