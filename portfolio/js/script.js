
/* =========================================
PORTFÓLIO - SCRIPT SENIOR CLEAN
========================================= */

/* =========================
MENU ACTIVE ON SCROLL (OTIMIZADO)
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* =========================
HEADER SCROLL EFFECT (CLEAN)
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("header-scrolled", window.scrollY > 50);
});


/* =========================
SCROLL REVEAL (SENIOR - INTERSECTION OBSERVER)
========================= */

const revealElements = document.querySelectorAll(
  ".hero-left, .hero-right, .about-content, .skills-box, .project-card, .featured-project, .contact-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((el) => observer.observe(el));


/* =========================
TYPEWRITER (OTIMIZADO)
========================= */

const typingElement = document.querySelector(".hero-subtitle");

if (typingElement) {

  const words = [
    "Desenvolvedora Front-End",
    "Interfaces Responsivas",
    "Suporte Técnico"
  ];

  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, letterIndex);

    let speed = isDeleting ? 50 : 90;

    if (!isDeleting && letterIndex === currentWord.length) {
      speed = 1200;
      isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
}


/* =========================
CUSTOM CURSOR (SENIOR VERSION)
========================= */

const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}


/* =========================
PROJECT SLIDER (SAFE + CLEAN)
========================= */

const slider = document.getElementById("projectsSlider");

function slideProjects(direction) {

  if (!slider) return;

  const card = slider.querySelector(".project-card");

  if (!card) return;

  const cardWidth = card.offsetWidth + 18;

  slider.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });

}

/* Botão Flutuante */

const btn = document.querySelector(".floating-btn");

if (btn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}