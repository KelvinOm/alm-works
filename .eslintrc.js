module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "one-var": ["error", "never"],
        "max-len": [
            "error",
            160,
            4,
            {
                "ignoreComments": true,
                "ignorePattern": "\\/(|i|g|m|ig|im|gm|igm);?"
            }
        ],

        "no-with": "error",
        "id-blacklist": [
            "error",
            "fit",
            "fdescribe"
        ],
        "no-mixed-spaces-and-tabs": "error",
        "brace-style": [
            "error",
            "1tbs",
            {
                "allowSingleLine": true
            }
        ],
        "curly": [
            "error",
            "multi-line"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "quote-props": [
            "error",
            "as-needed",
            {
                "keywords": true
            }
        ],
        "space-unary-ops": [
            "error",
            {
                "words": false,
                "nonwords": false
            }
        ],
        "no-spaced-func": "error",
        "comma-dangle": [
            "error", {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ],
        "no-trailing-spaces": "error",
        "space-before-blocks": [
            "error",
            "always"
        ],
        "new-cap": [
            "error",
            {
                "capIsNew": false
            }
        ],
        "wrap-iife": [
            "error",
            "any"
        ],
        "keyword-spacing": [
            "error",
            {}
        ],
        "dot-notation": "error",
        "space-infix-ops": "error",
        "key-spacing": 0,
        "comma-spacing": [
            "error",
            {
                "after": true
            }
        ],
        "max-lines": [
            "error",
            {
                "max": 1000,
                "skipBlankLines": true,
                "skipComments": true
            }
        ],
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": {
                    "var": 2,
                    "let": 2,
                    "const": 3
                },
                "FunctionDeclaration": { "parameters": "off" },
                "FunctionExpression": { "parameters": "off" },
                "MemberExpression": "off",
                "CallExpression": {"arguments": "off"},
                "ObjectExpression": "off",
                "ArrayExpression": "off",
                "ignoredNodes": ["ConditionalExpression"]
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],


        "no-bitwise": "error",
        "no-extend-native": "error",

        "comma-style": [
            "error",
            "last"
        ],
        "strict": [
            "error",
            "safe"
        ],

        "no-undef": "error",

        "complexity": [
            "error",
            {
                "max": 8
            }
        ],
        "max-params": [
            "error",
            10
        ],
        "max-statements": [
            "error",
            40
        ],
        "no-caller": "error",
        "no-sequences": "error",
        "no-new": "error",
        "valid-typeof": "error",
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used" }],
        "no-cond-assign": "error",
        "no-console": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-multi-str": "error",
        "no-return-assign": "error",
        "no-throw-literal": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-unmodified-loop-condition": "error",
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-debugger": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-empty": "error",
        "use-isnan": "error",
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "guard-for-in": "error",
        "no-alert": "error",
        "no-case-declarations": "error",
        "no-div-regex": "error",
        "no-eq-null": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "warn",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-redeclare": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-delete-var": "error",
        "no-undef-init": "error",
        "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 0, "maxEOF": 1}],
        "no-unneeded-ternary": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-func-assign": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-magic-numbers": ["error", {
            "detectObjects": true,
            "ignore": [-1, 0, 1]
        }],
        "no-eval": "error",
        "no-else-return": "error",
        "semi": [ "error", "always" ],
        "no-script-url": "error",
        "eqeqeq": "error",
        "no-duplicate-imports": "error",

        "operator-linebreak": [
            "error",
            "after",
            {
                "overrides": {
                    "?": "before",
                    ":": "before",
                    "&&": "before",
                    "||": "before"
                }
            }
        ],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }]
    }
};