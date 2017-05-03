module.exports = (ctx) => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'cssnano': {}
	}
})