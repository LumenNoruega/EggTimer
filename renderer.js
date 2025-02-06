let countdown;
function startTimer(minutes, type) {
  clearInterval(countdown);
  let time = minutes * 60;
  const timerDisplay = document.getElementById("timer");
  const eggImage = document.getElementById("eggImage");

  countdown = setInterval(() => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    timerDisplay.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "¡Listo!";
      eggImage.src = `images/${type}.png`; // Cambia la imagen al final
    }
  }, 1000);
}
