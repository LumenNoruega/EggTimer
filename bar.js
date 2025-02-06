document.addEventListener("DOMContentLoaded", () => {
    const barraHTML = `
      <div class="window-controls">
        <span class="title-text">Egg Timer <3</span>
        <div class="window-controls-right">
          <img id="shrinkWindow" src="images/lower_window.png" alt="Minimizar">
          <img id="closeWindow" src="images/close_window.png" alt="Cerrar">
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", barraHTML);
  
    // Eventos personalizados para minimizar y cerrar
    document.getElementById("shrinkWindow").addEventListener("click", () => {
      const { ipcRenderer } = require("electron");
      ipcRenderer.send("minimize-window");
    });
  
    document.getElementById("closeWindow").addEventListener("click", () => {
      const { ipcRenderer } = require("electron");
      ipcRenderer.send("close-app");
    });
  });
  