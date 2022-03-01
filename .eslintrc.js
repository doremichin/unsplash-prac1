module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'react/function-component-definition': [2, { namedComponents: 'function-declaration' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error', {
        groups: ['external', 'internal'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-use-before-define': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    camelcase: 'off',
    'no-plusplus': 'off',
    'react/no-danger': 'off',
  },
  globals: {
    JSX: true,
  },
};

//
// ========================
//
//
// "devDependencies": {
//   "@typescript-eslint/eslint-plugin": "^5.9.1",
//       "@typescript-eslint/parser": "^5.9.1",
//       "babel-plugin-import": "^1.13.3",
//       "eslint": "^8.6.0",
//       "eslint-config-airbnb": "^19.0.4",
//       "eslint-config-next": "12.0.7",
//       "eslint-plugin-import": "^2.25.4",
//       "eslint-plugin-jsx-a11y": "^6.5.1",
//       "eslint-plugin-react": "^7.28.0",
//       "eslint-plugin-react-hooks": "^4.3.0",
//       "eslint-plugin-unused-imports": "^2.0.0"
// }
