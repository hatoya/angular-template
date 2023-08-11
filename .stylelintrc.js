module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-prettier/recommended', 'stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**'],
  customSyntax: 'postcss-scss',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-empty-source': null,
    'import-notation': 'string',
    'selector-class-pattern': null,
    'block-no-empty': null,
    'no-descending-specificity': null,
    'color-function-notation': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['/^ng-/'] }]
  }
};
