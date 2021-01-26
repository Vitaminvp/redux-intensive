module.exports = {
  extends: ['pdffiller', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-sort-props': [2, {
      callbacksLast: true,
      shorthandFirst: true, 
      noSortAlphabetically: true,
    }],
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": 'handle',
      "eventHandlerPropPrefix": 'on',
      "checkLocalVariables": true,
      "checkInlineFunction": true
    }],

    'import/prefer-default-export': 0,

    'no-console': ['error', { allow: ['error'] }],

    'prettier/prettier': 'error',

    'consistent-return': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  globals: {
    $: 'readonly',
    LOCAL: 'readonly',
    IS_DEVELOP: 'readonly',
  },
};
