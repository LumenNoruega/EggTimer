const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // ⚠️ Esto permite usar ipcRenderer en el frontend
      contextIsolation: false
    }
  });

  mainWindow.loadFile("index.html");

  ipcMain.on("navigate", (event, page) => {
    mainWindow.loadFile(page);
  });
});

ipcMain.on("snooze-timer", () => {
    setTimeout(() => {
        mainWindow.loadFile("eggdone.html"); // 🔄 Vuelve a mostrar la alerta después de 1 min
    }, 60000);
});

ipcMain.on("close-app", () => {
    app.quit();
});

