const { app, BrowserWindow } = require("electron");
const url = require("url");
const express = require("express");
const axios = require("axios");
const path = require("node:path");

const server = express();
server.use(express.json());
server.use(require("cors")());

const port = 57425;

// API untuk menghubungkan ke Ollama di PC lokal
server.post("/chat", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "deepseek-r1:1.5b", // Ganti dengan model Ollama yang diinginkan
      prompt: req.body.prompt,
      stream: false,
    });

    console.log(response);

    res.json({ reply: response.data.response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

async function createWindow() {
  try {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname, "assets/icon.png"),
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    const startUrl = url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    });

    await win.loadURL(startUrl);
    // await win.loadURL("http://localhost:3000");

    // Open DevTools when the window is ready
    win.on("ready-to-show", () => {});
  } catch (error) {
    console.log(error);
  }
}

app.whenReady().then(() => {
  createWindow();

  server.listen(port, () => {
    console.log(`Express server is running at http://localhost:${port}`);
  });

  server.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
