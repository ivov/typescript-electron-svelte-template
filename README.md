# normative-template

This is a template for developing an app in TypeScript/Electron, Svelte and Tailwind CSS with hot-reloading.

The purpose of this template is enabling hot-reloading for every technology in the app:

- Watch and constantly recompile the TypeScript/Electron client with `tsc-watch`.
- Watch and constantly rebundle the Svelte app in `/renderer` with Rollup.
- Watch and constantly reload the TypeScript/Electron client with `electron-reload`.
- Generate the Tailwind CSS build file by running it through PostCSS once.

This dev setup will watch on `.ts` files (TypeScript/Electron client), `.js` files (Svelte frontend) and `index.html`.

## Installation

1. Clone repo.
2. Install dependencies: `npm install`
3. Generate Tailwind CSS build file: `npm run css`
4. Kickstart the hot-reload cycle: `npm run start`

## How it works

1. `npm run start` bundles the Svelte app into `build/client/public/bundle.js` with `rollup`. Changes to the Svelte app will trigger rebundling.
2. `rollup` spawns a child process to compile the TypeScript/Electron client files into `build/client/` with `tsc-watch`. Changes to the TypeScript/Electron client will trigger recompilation.
3. The client imports `client/utils/hotReload` to hot reload itself with `electron-reload` whenever changes occur in `build/client/renderer/bundle.js` (bundled Svelte app) or in `client/public/index.html`.

<p align="center">
    <img src="drawing.png">
</p>

## Author

© 2020 Iván Ovejero

## License

Distributed under the MIT License. See [LICENSE.md](LICENSE.md)
