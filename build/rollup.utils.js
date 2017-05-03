
export const NODE_ENV = (global.process.env.NODE_ENV) ? global.process.env.NODE_ENV : 'development'

export const ENVIRONMENT_DECLARATION_STUB = `const process = {
	env:{
		NODE_ENV: "${NODE_ENV}"
	}
}`

export const environmentIs = value => NODE_ENV === value