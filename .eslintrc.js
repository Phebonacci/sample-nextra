module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2020: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['node_modules/*'],
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: { version: 'detect' },
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        'react/boolean-prop-naming': ['error', { 
            rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
            validateNested: true,
        }],
    },
}