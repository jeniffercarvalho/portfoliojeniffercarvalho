async function checkBackend() {

  const el = document.querySelector(".status-online");

  try {

    const res = await fetch("http://localhost:3000/api/status");
    const data = await res.json();

    if (el) {
      el.innerHTML = `● ${data.status.toUpperCase()} | ${data.stack}`;
    }

  } catch (err) {

    if (el) {
      el.innerHTML = "● Backend Offline";
    }

  }

}

checkBackend();