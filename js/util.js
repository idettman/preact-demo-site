/**
 * @param a
 * @param b
 */
export const pipe = (a, b) => (c) => b(a(c))

/**
 * @param a
 * @param b
 */
export const compose = (a, b) => (c) => a(b(c))