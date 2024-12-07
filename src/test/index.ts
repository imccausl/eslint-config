import { createJestPluginConfig } from './jest.js'
import { createTestingLibraryPluginConfig } from './testingLibrary.js'
import { createVitestPluginConfig } from './vitest.js'

const pluginConfigs = [
    createJestPluginConfig(),
    createTestingLibraryPluginConfig(),
    createVitestPluginConfig(),
]

export default [...(await Promise.all(pluginConfigs))]
