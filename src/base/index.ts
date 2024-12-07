import { languageOptions } from './languageOptions.js'
import { rules } from './rules.js'
import { settings } from './settings.js'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...ts.configs.stylistic,
    importPlugin.flatConfigs.recommended,
    prettierRecommended,
    {
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.mts',
            '**/*.cts',
            '**/*.js',
            '**/*.mjs',
            '**/*.cjs',
            '**/*.jsx',
        ],
       languageOptions,
       settings,
       rules,
    },
]
