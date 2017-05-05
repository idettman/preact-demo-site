
const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV !== 'development') {
	
}

module.exports = (ctx) => ({
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