import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import ts from 'typescript-eslint'

export const extendedConfigs = [
    js.configs.recommended,
    ts.configs.recommended,
    ts.configs.stylistic,
]

export const plugins = [
    importPlugin.flatConfigs.recommended,
    prettierRecommended,
]
