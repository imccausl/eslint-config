import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import ts from 'typescript-eslint'

import { languageOptions } from './languageOptions.js'
import { rules } from './rules.js'
import { settings } from './settings.js'

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...ts.configs.stylistic,
    importPlugin.flatConfigs.recommended,
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
        settings: settings(),
        rules,
    },
]
