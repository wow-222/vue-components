module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		indent: ['error', 2, {
			SwitchCase: 1
		}],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never']
	}
}