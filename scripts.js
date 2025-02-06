const { ipcRenderer } = require("electron");

// Cerrar ventana
document.getElementById("closeAppBtn")?.addEventListener("click", () => {
  ipcRenderer.send("close-app");
});

// Minimizar ventana
document.getElementById("minimizeAppBtn")?.addEventListener("click", () => {
  ipcRenderer.send("minimize-app");
});
