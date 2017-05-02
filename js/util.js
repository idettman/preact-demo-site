/**
 * @param {function} a
 * @param {function} b
 * @returns {function}
 */
export const pipe = (a, b) => c => b(a(c))

/**
 * @param {function} a
 * @param {function} b
 * @returns {function}
 */
export const compose = (a, b) => c => a(b(c))