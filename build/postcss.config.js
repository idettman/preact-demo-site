const NODE_ENV = process.env.NODE_ENV

const PLUGIN_CSSNEXT = {
	browsers: '> 5%',
	autoprefixer: false
}

const PLUGIN_CSSNANO = {
	autoprefixer: false,
	normalizeUrl: false,
	svgo: false
}

const CONFIG_DEV = ctx => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'postcss-cssnext': PLUGIN_CSSNEXT
	}
})

const CONFIG_PROD = ctx => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'postcss-cssnext': PLUGIN_CSSNEXT,
		'cssnano': PLUGIN_CSSNANO
	}
})

const CONFIG = (NODE_ENV === 'development') ? CONFIG_DEV : CONFIG_PROD

module.exports = CONFIG
