module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  // ESLint extends configurations recursively
  extends: [
    'alloy',
    'alloy/react',
    // 'alloy/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'prettier',
    // 'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/react',
  ],
  // 自定义规则，可以覆盖掉extends的配置,0-off,1-warn,2-error
  rules: {
    'no-param-reassign': 1,
    'no-invalid-this': 1,
    'guard-for-in': 1,
    'prefer-const': 1,
    'prefer-spread': 1,
    'prefer-rest-params': 1,
    'react/prop-types': 1,
    'react/no-find-dom-node': 1,
    'react/no-deprecated': 1,
    'react/display-name': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'prettier/prettier': 1,
  },
};
