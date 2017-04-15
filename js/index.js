'use strict'

{
	/**
	 * @param a
	 * @param b
	 */
	const pipe = (a, b) => (c) => b(a(c))
	
	/**
	 * @param a
	 * @param b
	 */
	const compose = (a, b) => (c) => a(b(c))
	
	/**
	 * @type {Element}
	 */
	const lockedAspectContainer = document.body
	
	const documentResize = () => {
		const w = (window.innerWidth)
		lockedAspectContainer.style.height = w + 'px'
	}
	
	const processAfterFrame = command => window.requestAnimationFrame(command)
	
	const addResizeListener = () => window.addEventListener('resize', documentResize)
	
	const documentReady = () => {
		if (document.readyState === 'complete') {
			window.removeEventListener('load', documentReady)
			documentResize()
			processAfterFrame(addResizeListener)
		}
	}
	
	window.addEventListener('load', documentReady)
}