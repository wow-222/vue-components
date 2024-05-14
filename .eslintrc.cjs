module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  'rules': {
		'indent': [	// 缩进使用tab
			'error',
			'tab'
		],
		'linebreak-style': [ // 换行风格
			'error',
			'unix'
		],
		'quotes': [	// 单引号
			'error',
			'single'
		],
		'semi': [	// 不使用分号
			'error',
			'never'
		]
	}
}