const NODE_ENV = process.env.NODE_ENV

const CONFIG_DEV = ctx => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'postcss-cssnext': {
			browsers: 'last 1 Chrome versions'
		}
	}
})

const CONFIG_PROD = ctx => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'postcss-cssnext': {
			browsers: 'last 2 Chrome versions'
		},
		'cssnano': {
			autoprefixer: false
		}
	}
})

const CONFIG = (NODE_ENV !== 'development') ? CONFIG_DEV : CONFIG_PROD

module.exports = CONFIG