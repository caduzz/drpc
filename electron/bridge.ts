import { contextBridge, ipcRenderer } from "electron";

export const api = {
	minimizeWindow: () => {
		ipcRenderer.send("minimize");
	},

	maximizeWindow: async () => {
		const isMaximized = await ipcRenderer.invoke("isMaximized");
		if (isMaximized) {
			ipcRenderer.send("unmaximize");
		} else {
			ipcRenderer.send("maximize");
		}
	},

	closeWindow: () => {
		ipcRenderer.send("close");
	},

	sendNotify: ({ title, body }: { title: string; body: string }) => {
		ipcRenderer.send("notify", title, body);
	},

	sendMessage: (message: string) => {
		ipcRenderer.send("message", message);
	},

	startRpc: (data: {}) => {
		ipcRenderer.send("startRpc", data);
	},
	stopRpc: () => {
		ipcRenderer.send("stopRpc");
	}
};

contextBridge.exposeInMainWorld("Main", api);
