module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
            jsx: true
        },
        sourceType: module
    },
    plugins: [
        'react',
        'import'
    ],
    rules: {
      "react/jsx-filename-extension": 0,
      "function-paren-newline": 0
    }
  };
