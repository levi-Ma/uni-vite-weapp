const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  ignores: ['dist*', 'output', 'cache', 'static', 'public', '**/node_modules/', '**/*.d.ts', '**/*.md'],
}, {
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
  },
})
