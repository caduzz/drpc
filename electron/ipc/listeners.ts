/* eslint-disable no-undef */
import { ipcMain, Notification, BrowserWindow } from "electron";
import DiscordRPC from "discord-rpc";

import path from "path";
import fs from "fs";


let rpc: DiscordRPC.Client | null = null;

export const handleListeners = (
	mainWindow: BrowserWindow | null,
	assetsPath: string,
) => {
	ipcMain.on("maximize", () => {
		mainWindow?.maximize();
	});

	ipcMain.on("unmaximize", () => {
		mainWindow?.unmaximize();
	});

	ipcMain.on("minimize", () => {
		mainWindow?.minimize();
	});

	ipcMain.on("close", () => {
		mainWindow?.close();
	});

	ipcMain.handle("isMaximized", () => mainWindow?.isMaximized());

	ipcMain.on("notify", (_, title, body) => {
		const icon = path.join(assetsPath, "assets", "icons", "icon.ico");

		new Notification({ title, body, icon }).show();
	});

	ipcMain.on("message", (_, message) => {
		console.log(message);
	});

	ipcMain.on("startRpc", (_, { clientId, ...data}) => {
		if (rpc) return mainWindow?.webContents.send("showToast", { type: "error", message: "RPC ja esta ativo!" });
		
		rpc = new DiscordRPC.Client({ transport: "ipc" });

		rpc.on("ready", () => {
			if (rpc){ 
				rpc.setActivity({
					startTimestamp: new Date(),
					instance: false,
					...data
				}).then(() => {
					mainWindow?.webContents.send("showToast", { type: "success", message: "RPC ativado!" });
				}).catch(() => {
					mainWindow?.webContents.send("showToast", { type: "error", message: "Espere um tempo para ativar" });
				});
			}
		});

		rpc.login({ clientId }).catch(() => {
			rpc = null
		});
	});

	ipcMain.on("stopRpc", () => {
		if (!rpc) {
			return mainWindow?.webContents.send("showToast", { type: "error", message: "RPC Já desativado!" });
		}

		rpc.destroy()
		.then(() => {
			mainWindow?.webContents.send("showToast", { type: "success", message: "RPC desativado!" })
			rpc = null;
		})
		.catch(console.error);

	});

	ipcMain.handle("isRpcActive", () => rpc !== null);

	ipcMain.on("sendToast", (_, { type, message }) => {
		mainWindow?.webContents.send("showToast", { type, message });
	});
};
