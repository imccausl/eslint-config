import { importModuleIfExists } from '../util/index.js'

import { files } from './files.js'

export const createJestPluginConfig = async () => {
    const jestPlugin = await importModuleIfExists('eslint-plugin-jest')
    if (!jestPlugin) return []
    return [
        {
            files,
            plugins: {
                jest: jestPlugin,
            },
            languageOptions: {
                globals: jestPlugin.environments.globals.globals,
            },
            rules: {
                'jest/no-disabled-tests': 'warn',
                'jest/no-focused-tests': 'error',
                'jest/no-identical-title': 'error',
                'jest/prefer-to-have-length': 'warn',
                'jest/valid-expect': 'error',
            },
        },
    ]
}
