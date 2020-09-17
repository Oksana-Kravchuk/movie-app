module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'import/newline-after-import': 'error',
    'semi': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx']
      }
    ],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0
  },
};
