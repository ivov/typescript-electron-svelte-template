import { app, BrowserWindow, session } from "electron";
import "./utils/hotReload";

export default class Client {
	window: BrowserWindow | null;

	constructor() {
		app.on("ready", this.createWindow);
		app.allowRendererProcessReuse = true;
	}

	private createWindow() {
		this.window = new BrowserWindow({
			width: 1000,
			height: 600,
			webPreferences: { nodeIntegration: true, nativeWindowOpen: true }
		});

		this.window.loadURL(
			"file://" + process.cwd() + "/client/public/index.html"
		);

		this.window.on("closed", () => {
			this.window = null;
		});
		session.defaultSession.clearStorageData();
	}
}

new Client();
