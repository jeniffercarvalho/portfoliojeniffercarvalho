function startAI() {

  const box = document.querySelector(".ai-output");

  if (!box) return;

  box.innerHTML = "";

  const messages = [
    "🤖 IA iniciada...",
    "💻 Analisando portfólio...",
    "⚙️ Front-End moderno detectado",
    "🔗 Backend Node.js conectado",
    "🚀 Perfil Full Stack confirmado"
  ];

  messages.forEach((msg, i) => {

    setTimeout(() => {

      const p = document.createElement("p");
      p.textContent = msg;
      box.appendChild(p);

    }, i * 1000);

  });

}

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector(".ai-card .btn");

  if (btn) {
    btn.addEventListener("click", startAI);
  }

});