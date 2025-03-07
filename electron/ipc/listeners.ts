/* eslint-disable no-undef */
import { ipcMain, Notification, BrowserWindow } from "electron";
import DiscordRPC from "discord-rpc";

import path from "path";
import fs from "fs";

import { timerProps } from "../../src/@types/timer";

let rpc: DiscordRPC | null = null;

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

	ipcMain.handle("readFile", (_, name: string): timerProps[] => {
		const filePath = path.join(assetsPath, "assets", "configs", name);

		const fileContent = fs.readFileSync(filePath, "utf8");

		const data = JSON.parse(fileContent);

		return data;
	});

	ipcMain.on("writeFile", async (_, name: string, content: []) => {
		const filePath = path.join(assetsPath, "assets", "configs", name);

		try {
			const dataFile = JSON.stringify(content, null, 2);

			fs.writeFileSync(filePath, dataFile);

			console.log(`Arquivo ${name} atualizado com sucesso.`);
		} catch (error) {
			console.error(`Erro ao escrever no arquivo ${name}:`, error);
		}
	});

	ipcMain.on("startRpc", (_, { clientId, ...data}) => {
		if (rpc) {
			console.log("RPC ja esta ativo!");
			return;
		}

		rpc = new DiscordRPC.Client({ transport: "ipc" });

		rpc.on("ready", () => {
			rpc.setActivity({
				startTimestamp: new Date(),
				instance: false,
				...data
			});

			console.log("RPC ativo!", data, clientId);
		});

		rpc.login({ clientId }).catch(() => {
			console.error
			rpc = null
		});
	});

	ipcMain.on("stopRpc", () => {
		if (!rpc) {
			console.log("RPC ja esta desativado!");
			return
		}

		rpc.destroy()
		.then(() => {
			console.log("RPC desativado!");
			rpc = null;
		})
		.catch(console.error);

	});
};
