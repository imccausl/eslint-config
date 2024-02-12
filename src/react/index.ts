import { doesModuleExist } from '../util'

import type { ESLint } from 'eslint'

const plugins: ESLint.ConfigData['plugins'] = []
const extensions: ESLint.ConfigData['extends'] = []

if (doesModuleExist('react')) {
    plugins.push('react')
    extensions.push('plugin:react/recommended')
}

if (doesModuleExist('react-hooks')) {
    plugins.push('react-hooks')
    extensions.push('plugin:react-hooks/recommended')
}

if (doesModuleExist('jsx-a11y')) {
    plugins.push('jsx-a11y')
    extensions.push('plugin:jsx-a11y/recommended')
}

if (doesModuleExist('@tanstack/eslint-plugin-query')) {
    plugins.push('@tanstack/query')
    extensions.push('plugin:@tanstack/eslint-plugin-query/recommended')
}

const config: ESLint.ConfigData = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: extensions,
    plugins,
    rules: {},
    settings: {
        react: {
            version: 'detect',
        },
    },
}

export = config
