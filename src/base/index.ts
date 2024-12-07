import { rules } from './rules'

import type { ESLint } from 'eslint'

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
