/**
 * @param {function} a
 * @param {function} b
 * @returns {function}
 */
export const pipe2 = (a, b) => c => b(a(c))

/**
 * @param {function} a
 * @param {function} b
 * @returns {function}
 */
export const compose2 = (a, b) => c => a(b(c))

/**
 * @name compose
 * @param {...Function} fns - the functions to compose
 * @returns {Function} a new function that is the composition of fns
 */
function compose (...fns) {
	return function composition (arg) {
		return fns.reduceRight((accumulate, next) => {
			return next(accumulate)
		}, arg)
	}
}

/**
 * @name curry
 * @param {Function} fn - a function to curry
 * @returns {Function} a new function that is a curried version of fn
 */
function curry (fn, ...args) {
	// how many arguments do we expect to receive
	const arity = fn.length
	
	function curried (...args2) {
		const locals = args.concat(args2)
		
		if (locals.length >= arity) {
			// If we have all the arguments, apply the function and return the result
			return fn(...locals)
		}
		else {
			// if we don't have all the arguments, return a new function that awaits remaining arguments
			return curry(fn, ...locals)
		}
	}
	// if we have all the arguments apply the function
	// else return a function to receive more arguments
	return ((args.length >= arity) ? curried() : curried)
}


const trim = str => str.trim()

const split = curry((separator, str) => str.split(separator))

const breakOnSpace = split(' ')

const join = curry((separator, array) => array.join(separator))

const joinWithSpace = join(' ')

const notEmpty = (next => next.length > 0)

const removeEmpty = xs => xs.filter(notEmpty)

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1)

const capitalized = words => words.map(capitalize)

const words = compose(removeEmpty, breakOnSpace, trim)

const titleCase = compose(joinWithSpace, capitalized, words)