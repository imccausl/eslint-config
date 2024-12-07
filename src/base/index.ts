import { languageOptions } from './languageOptions'
import { extendedConfigs, plugins } from './plugins'
import { rules } from './rules'
import { settings } from './settings'

export default [
    ...extendedConfigs,
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
        plugins,
        settings,
        rules,
    },
]
