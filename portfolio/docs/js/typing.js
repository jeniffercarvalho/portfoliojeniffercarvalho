const texts = [
  "Desenvolvedora Full Stack",
  "Frontend Developer",
  "Backend Node.js",
  "APIs & Integrações",
  "UI moderna e responsiva"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const el = document.querySelector(".typing");

function type() {

  if (!el) return;

  current = texts[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  el.innerHTML = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 90);
}

type();