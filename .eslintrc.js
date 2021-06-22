module.exports = {
  "ignorePatterns": ["test/*.js", ".eslintrc.js"],
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:lit/recommended",
    "plugin:lit-a11y/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["lit", "lit-a11y", "jsdoc"],
  "rules": {
    "accessor-pairs": "error",
    "array-bracket-newline": "error",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "array-element-newline": "error",
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": ["error", {
      "after": true,
      "before": true
    }],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "camelcase": "error",
    "comma-spacing": ["error", {
      "after": true,
      "before": false
    }],
    "comma-style": ["error", "last"],
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "consistent-this": "error",
    "curly": "error",
    "default-case": "error",
    "default-param-last": "error",
    "dot-location": "error",
    "dot-notation": "error",
    "eol-last": ["error", "always"],
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "function-paren-newline": "error",
    "generator-star-spacing": "error",
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "id-length": "error",
    "id-match": "error",
    "implicit-arrow-linebreak": "error",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": ["TemplateLiteral > *"]
      }
    ],
    "init-declarations": "error",
    "keyword-spacing": ["error", {
      "after": true,
      "before": true
    }],
    "line-comment-position": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-between-class-members": ["error", "always"],
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-lines": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-constructor-return": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        "ignore": [0, 1],
        "ignoreArrayIndexes": true
      }
    ],
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-property-newline": "error",
    "object-shorthand": "error",
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "radix": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": "error",
    "semi-style": ["error", "last"],
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "strict": "error",
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": ["error", "never"]
  }
};
