module.exports = (ctx) => ({
	plugins: {
		'postcss-import': {
			root: ctx.file.dirname
		},
		'postcss-cssnext': {},
		'cssnano': {}
	}
})