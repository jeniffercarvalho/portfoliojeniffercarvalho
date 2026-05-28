function createParticle() {

  const p = document.createElement("div");

  p.classList.add("particle");

  document.body.appendChild(p);

  const size = Math.random() * 6 + 2;

  p.style.width = size + "px";
  p.style.height = size + "px";

  p.style.left = Math.random() * window.innerWidth + "px";

  p.style.top = window.innerHeight + "px";

  p.style.opacity = Math.random();

  const duration = Math.random() * 4 + 3;

  p.style.animation = `particleAnimation ${duration}s linear`;

  setTimeout(() => {
    p.remove();
  }, duration * 1000);

}

setInterval(createParticle, 250);