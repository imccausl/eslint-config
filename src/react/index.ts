import { languageOptions } from './languageOptions.js'
import { importExtendedConfigs } from '../util/index.js'
import { pluginModules } from './plugins.js'
import { createHooksPluginConfig } from './reactHooks.js'

const config = [
    ...(await importExtendedConfigs(pluginModules)),
    ...(await createHooksPluginConfig()),
    {
        languageOptions,
        rules: {},
        settings: {
            react: {
                version: 'detect',
            },
        }
    }
]

export default config
