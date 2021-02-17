module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: 'true'
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    quotes: ['error', 'single'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
  }
}
