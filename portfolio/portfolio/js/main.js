document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Scroll suave no menu
  document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", (e) => {

      const targetId = link.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }

    });

  });

  // 🔹 Header dinâmico no scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      header.style.background = "rgba(5,5,5,0.95)";
      header.style.boxShadow = "0 0 20px rgba(0,170,255,0.2)";
    } else {
      header.style.background = "rgba(5,5,5,0.7)";
      header.style.boxShadow = "none";
    }

  });

  // 🔹 Botão efeito hover
  const btn = document.querySelectorAll(".btn");

  btn.forEach(b => {

    b.addEventListener("mouseover", () => {
      b.style.transform = "scale(1.05)";
    });

    b.addEventListener("mouseout", () => {
      b.style.transform = "scale(1)";
    });

  });

  console.log("%cPortfólio carregado 🚀", "color:#00aaff;font-weight:bold");

});