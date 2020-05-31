import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const production = !process.env.ROLLUP_WATCH;

export default {
	input: "client/renderer/renderer.js",
	output: {
		file: "build/client/public/bundle.js"
	},
	plugins: [
		svelte({
			dev: !production
		}),
		resolve({
			browser: true,
			dedupe: ["svelte"]
		}),
		commonjs(),
		serve()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require("child_process").spawn("npm", ["run", "electron-start"], {
					stdio: ["ignore", "inherit", "inherit"],
					shell: true
				});
			}
		}
	};
}
