- ##import

	####pros:
	- simple to configure and has fast execution time
	
	####cons:
	- imports must be above any declarations
	
- ##cssnext

	####pros:
	- supports many future css specifications
	- uses caniuse website for browser feature support IE, you list the minimum browser support and 
	features are automatically transpiled for browsers that fall outside of the support specified
	- automatic vendor prefixes
	- var()
	- calc()
	- custom properties @apply
	- initial value   
	
	####cons:
	- not all future css features are 100% complete for legacy cross-browser support
	
- ##cssnano

	####pros:
	- simple to configure
	
	####cons:
	- contains autoprefixer, so it needs to be disabled when using with cssnext
	
	
	`plugins: {
		'postcss-cssnext': {},
		'cssnano': {
			autoprefixer: false
		}
	}`
	
	
##what css features are important for our use-case
- media queries
- nesting
- color functions
- :any-link pseudo-class
- :matches pseudo-class
- :not pseudo-class
- :: pseudo syntax
- overflow-wrap (word-wrap fallback)
- attribute case insensitive
- rbg() function (functional notation, space separated values with optional slash separated opacity)
- hsl() function see previously mentioned rbg()
- system-ui font family 

