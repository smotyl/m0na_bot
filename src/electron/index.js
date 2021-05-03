const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  // once electron has started up, create a window.
  const window = new BrowserWindow({
    width: 800,
    height: 850,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  // hide the default menu bar that comes with the browser window
  window.setMenuBarVisibility(null);

  // load a website to display
  // window.loadURL(`http://example.com`);
  window.loadURL(`file://${__dirname}/../../dist/index.html`);

  // Open the DevTools.
  // window.webContents.openDevTools();
});
