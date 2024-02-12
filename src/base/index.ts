import type { ESLint } from 'eslint'

const rules: ESLint.ConfigData['rules'] = {
    'prettier/prettier': [
        'error',
        {
            printWidth: 80,
            tabWidth: 4,
            semi: false,
            trailingComma: 'all',
            singleQuote: true,
            allowParens: 'always',
        },
    ],

    /** Errors */
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
        },
    ],
    camelcase: 'off',

    /* Conditionals */
    eqeqeq: 'error',
    'no-nested-ternary': 'error',

    /* Imports */
    'no-duplicate-imports': 'error',
    'sort-imports': [
        'error',
        {
            /* Prefer import/order declaration sort due to  autofixer */
            ignoreDeclarationSort: true,
        },
    ],
    'import/default': 'error',
    'import/export': 'error',
    'import/named': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
        'error',
        {
            'newlines-between': 'always',
            /* Note: Modules are assigned groups based on checks against the module path. */
            groups: [
                'unknown',
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index',
                'object',
                'type',
            ],
            alphabetize: { order: 'asc' },
            pathGroupsExcludedImportTypes: ['builtin'],
            warnOnUnassignedImports: true,
        },
    ],

    /* Typescript Types */
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // Discourage disabling static analysis.
    '@typescript-eslint/ban-types': 'warn', // Discourage disabling static analysis.
    '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
}

const config: ESLint.ConfigData = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'prettier',
    ],
    plugins: ['import', 'prettier', '@typescript-eslint'],
    rules,
    settings: {
        'import/external-module-folders': ['node_modules', '.yarn'],
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
                '.mts',
                '.cts',
                '.js',
                '.mjs',
                '.cjs',
                '.jsx',
            ],
        },
        'import/resolver': [
            {
                [require.resolve('eslint-import-resolver-typescript')]: {
                    alwaysTryTypes: true,
                },
            },
            { [require.resolve('eslint-import-resolver-node')]: {} },
        ],
    },
}

export = config
