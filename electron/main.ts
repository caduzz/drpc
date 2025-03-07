import { app, BrowserWindow } from "electron";

import path from "path";
import { handleListeners } from "./ipc/listeners";

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const assetsPath =
	process.env.NODE_ENV === "production"
		? process.resourcesPath
		: app.getAppPath();

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: path.join(assetsPath, "assets", "icons", "icon.ico"),
		title: "drpc",
		width: 1100,
		height: 700,
		minWidth: 750,
		minHeight: 450,
		frame: false,
		autoHideMenuBar: true,
		backgroundColor: "#0000",
		transparent: false,
		webPreferences: {
			devTools: true,
			nodeIntegration: true,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.maximize();

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

async function registerListeners() {
	handleListeners(mainWindow, assetsPath);
}

app
	.on("ready", createWindow)
	.whenReady()
	.then(() => {
		registerListeners()
	})
	.catch((e) => alert(e));

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
