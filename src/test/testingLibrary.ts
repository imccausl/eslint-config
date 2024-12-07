import { importModuleIfExists } from '../util/index.js'

import { files } from './files.js'

export const createTestingLibraryPluginConfig = async () => {
    const testingLibraryPlugin = await importModuleIfExists(
        '@testing-library/eslint-plugin',
    )
    if (!testingLibraryPlugin) return []
    return [
        {
            files,
            plugins: {
                'testing-library': testingLibraryPlugin,
            },
            rules: {
                ...testingLibraryPlugin.configs.react,
            },
        },
    ]
}
