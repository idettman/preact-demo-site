'use strict'

{
	const documentResize = () => {
		console.log('resize:', window.innerWidth, window.innerHeight)
	}
	
	const documentReady = () => {
		if (document.readyState === 'ready') {
			window.removeEventListener('load', documentReady)
			window.addEventListener('resize', documentResize)
		}
	}
	
	window.addEventListener('load', documentReady)
}