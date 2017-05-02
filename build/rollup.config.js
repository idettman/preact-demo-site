'use strict'

import node from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'

import cssnano from 'cssnano'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'

const cssExportMap = {};

const NODE_ENV = (global.process.env.NODE_ENV) ? global.process.env.NODE_ENV : 'development'
const ENVIRONMENT = `const process = { env:{ NODE_ENV: "${NODE_ENV}" } }`

const environmentIs = value => NODE_ENV === value
const development = environmentIs('development')
const production = environmentIs('production')


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

const POSTCSS_OPTIONS = {
	plugins: [
		cssnano,
		postcssModules({
			getJSON (id, exportTokens) {
				cssExportMap[id] = exportTokens;
			}
		})
	],
	getExport (id) {
		return cssExportMap[id];
	}
}

const devPlugins = [
	node(NODE_OPTIONS),
	commonjs(COMMONJS_OPTIONS),
	buble(BUBLE_OPTIONS)
]

const productionPlugins = [
	node(NODE_OPTIONS),
	commonjs(COMMONJS_OPTIONS),
	buble(BUBLE_OPTIONS),
	postcss(POSTCSS_OPTIONS),
	uglify()
]

export default {
	entry: 'js/app.js',
	intro: ENVIRONMENT,
	exports: 'none',
	format: 'iife',
	dest: 'app-bundle.js',
	sourceMap: true,
	plugins: (development) ? devPlugins : productionPlugins,
	external: ['fs', 'path', 'readline']
}