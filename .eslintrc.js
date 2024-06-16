module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }]
  },
  overrides: [
    {
      files: ['**/*.{tsx,ts}'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  globals: {
    __DEV__: true,
    window: true
  }
}
