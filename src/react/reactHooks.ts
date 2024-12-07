import { importModuleIfExists } from '../util/index.js'

export const createHooksPluginConfig = async () => {
    const hooksPlugin = await importModuleIfExists('eslint-plugin-react-hooks')
    if (!hooksPlugin) return []
    return [{
        plugins: {
            'react-hooks': hooksPlugin,
        },
        rules: {
            ...hooksPlugin.configs.recommended.rules,
        },
    }]
}
