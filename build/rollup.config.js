'use strict';

import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';

const environmentMode = `const process = {
	env: {
		NODE_ENV: "development"
	}
}`

export default {
	entry: 'js/app.js',
	intro: environmentMode,

	exports: 'none',
	format: 'iife',
	dest: 'app-bundle.js',
	sourceMap: true,

	plugins: [
		node({
			jsnext: true,
			main: true,
			browser: true,
			module: true
		}),
		commonjs({
			include: [
				'node_modules/**'
			],
			ignoreGlobals: true,
			sourceMap: true,
		}),
		buble({
			jsx: 'h',
			exclude: "node_modules/!**",
			transforms: {
				modules: false
			}
		}),
	],
	external: ['fs', 'path', 'readline']
}