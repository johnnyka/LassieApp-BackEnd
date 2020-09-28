module.exports = {
  'root': true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
    }],
    'comma-dangle': [ 'warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    }],
    'eol-last': [ 'error', 'always' ],
    'indent': [ 'error', 2 ],
    'no-multiple-empty-lines': [ 'error', {
      max: 2,
    }],
    'no-prototype-builtins': 0,
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [ 'error', 'always' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'always' ],
    'react/prop-types': 'off',
  },
};
