module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['airbnb'],
  rules: {
    indent: ['error', 2],
    'operator-linebreak': ['error', 'after'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'react/sort-comp': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-fragments': 'off',
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': ['error', { caseSensitive: true, ignore: ['core/'] }],
    'max-len': ['error', { code: 120, ignoreStrings: true, ignoreComments: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: '_', argsIgnorePattern: '_' }],
    'no-underscore-dangle': 'off',
  },
  globals: {
    logger: 'readonly',
  },
};
