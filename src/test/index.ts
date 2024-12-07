import { importModuleIfExists } from '../util'

import type { ESLint, Linter } from 'eslint'

const overrides: ESLint.ConfigData['overrides'] = []
const extensions: ESLint.ConfigData['extends'] = []
const plugins: ESLint.ConfigData['plugins'] = []

const doesJestPluginExist = importModuleIfExists('eslint-plugin-jest')

if (importModuleIfExists('eslint-plugin-testing-library')) {
    extensions.push('plugin:testing-library/react')
}

if (importModuleIfExists('@vitest/eslint-plugin')) {
    extensions.push('plugin:vitest/recommended')
    plugins.push('vitest')
}

if (doesJestPluginExist) {
    extensions.push('plugin:jest/recommended')
    extensions.push('plugin:jest/style')
    plugins.push('jest')
}

if (extensions.length || plugins.length) {
    const testConfig: Linter.ConfigOverride = {
        files: [
            '**/__tests__/**/*.[jt]s?(x)',
            '**/?(*.)+(spec|test).[jt]s?(x)',
        ],
        extends: extensions,
        plugins,
    }

    if (doesJestPluginExist) {
        testConfig.env = {
            jest: true,
        }
    }

    overrides.push(testConfig)
}

const config: ESLint.ConfigData = {
    overrides,
}

export = config
