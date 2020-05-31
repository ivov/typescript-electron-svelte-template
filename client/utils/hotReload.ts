import path from "path";

// hot reload index.html on changes in current dir's /public
require("electron-reload")(
	path.join(process.cwd(), "client", "public", "index.html"),
	{
		electron: path.join(process.cwd(), "node_modules", ".bin", "electron.cmd")
	}
);

// hot reload index.html on changes in build/client/renderer/bundle.js
require("electron-reload")(
	path.join(process.cwd(), "build", "client", "public", "bundle.js"),
	{
		electron: path.join(process.cwd(), "node_modules", ".bin", "electron.cmd")
	}
);
