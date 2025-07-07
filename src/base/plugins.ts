import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import ts from 'typescript-eslint'

import { importModuleIfExists } from '../util/index.js'

export const extendedConfigs = [
    js.configs.recommended,
    ts.configs.recommended,
    ts.configs.stylistic,
]

export const plugins = [
    importPlugin.flatConfigs.recommended,
    await importModuleIfExists('eslint-plugin-prettier/recommended'),
]
