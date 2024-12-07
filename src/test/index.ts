import { createJestPluginConfig } from './jest.js'
import { createTestingLibraryPluginConfig } from './testingLibrary.js'
import { createVitestPluginConfig } from './vitest.js'

const pluginConfigs = [
    ...(await createJestPluginConfig()),
    ...(await createTestingLibraryPluginConfig()),
    ...(await createVitestPluginConfig()),
]
export default pluginConfigs
