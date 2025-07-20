import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import-x'
import ts from 'typescript-eslint'

import { importModuleIfExists } from '../util/index.js'

import { languageOptions } from './languageOptions.js'
import { rules } from './rules.js'
import { settings } from './settings.js'

const optionalDependencies = []
const eslintPluginPrettier = await importModuleIfExists(
  'eslint-plugin-prettier/recommended',
)
if (eslintPluginPrettier) {
  optionalDependencies.push(eslintPluginPrettier)
}

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...ts.configs.stylistic,
  importPlugin.flatConfigs.recommended,
  ...optionalDependencies,
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
