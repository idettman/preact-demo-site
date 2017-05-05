import node from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'

import {environmentIs, ENVIRONMENT_DECLARATION_STUB} from './build.utils'

const NODE_OPTIONS = {
	jsnext: true,
	main: true,
	module: true,
	browser: true
}

const COMMONJS_OPTIONS = {
	include: [
		'node_modules/**'
	],
	ignoreGlobals: true,
	sourceMap: true
}

const BUBLE_OPTIONS = {
	jsx: 'h',
	exclude: "node_modules/!**",
	transforms: {
		modules: false
	}
}

const PLUGINS_DEV = [
	node(NODE_OPTIONS),
	commonjs(COMMONJS_OPTIONS),
	buble(BUBLE_OPTIONS)
]

const PLUGINS_PRODUCTION = PLUGINS_DEV.concat([
	uglify()
])

export default {
	entry: 'js/app.js',
	intro: ENVIRONMENT_DECLARATION_STUB,
	exports: 'none',
	format: 'iife',
	dest: 'app-bundle.js',
	sourceMap: true,
	plugins: (environmentIs('development')) ? PLUGINS_DEV : PLUGINS_PRODUCTION,
	external: ['fs', 'path', 'readline']
}