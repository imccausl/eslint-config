import { languageOptions } from './languageOptions.js'
import { extendedConfigs, plugins } from './plugins.js'
import { rules } from './rules.js'
import { settings } from './settings.js'

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
