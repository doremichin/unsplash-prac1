module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'unused-imports',
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        },
    },
    ignorePatterns: [
        '.eslintrc.js',
        '*.config.js',
    ],
    rules: {
        'import/extensions': ['off'],
        'import/prefer-default-export': 'off',
        'no-plusplus': 'off',
        semi: ['error', 'always'],
        // Custom rules
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.tsx', '.jsx', '.js', '.ts'] },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/order': [
            'error',
            {
                groups: ['external', 'internal'],
                'newlines-between': 'always',
            },
        ],
        'unused-imports/no-unused-imports': ['error'],
        'react/jsx-indent-props': ['error', 'first'],
        'react/jsx-curly-newline': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        'no-unused-vars': 'off',
        'no-proto': 'off',
        'camelcase': 'off',
        'class-methods-use-this': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'max-classes-per-file': 'off',
        'max-len': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-useless-escape': 'off',
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off'
    },
};
