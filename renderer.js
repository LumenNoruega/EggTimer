let countdown;

window.onload = function () {
  const storedMinutes = parseInt(localStorage.getItem("eggTime"), 10) || 3;
  const type = localStorage.getItem("eggType") || "default";
  startTimer(storedMinutes, type);
};

function startTimer(minutes, type) {
  clearInterval(countdown);
  let time = minutes * 60;
  const timerDisplay = document.getElementById("timer");
  const eggImage = document.getElementById("eggImage");

  updateDisplay(time); // Muestra la primera actualización correcta

  countdown = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdown);
      // No mostrar "¡Listo!", solo navegar a la página
      ipcRenderer.send("navigate", "eggdone.html");
    } else {
      updateDisplay(time);
    }
  }, 1000);
}

function updateDisplay(time) {
  const mins = String(Math.floor(time / 60)).padStart(2, '0');
  const secs = String(time % 60).padStart(2, '0');
  document.getElementById("timer").textContent = `${mins}:${secs}`;
}
