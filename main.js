const { app, BrowserWindow, ipcMain } = require("electron");
let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 500,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false,
    }
  });

  mainWindow.loadFile("index.html");

  ipcMain.on("navigate", (event, page) => {
    mainWindow.loadFile(page);
  });

  ipcMain.on("snooze-timer", () => {
    setTimeout(() => {
      mainWindow.loadFile("eggdone.html");
    }, 60000);
  });

  ipcMain.on("minimize-window", () => {
    mainWindow.minimize();
  });

  ipcMain.on("close-app", () => {
    app.quit();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
