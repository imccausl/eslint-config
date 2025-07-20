import { importModuleIfExists } from '../util/index.js'

import { files } from './files.js'

export const createTestingLibraryPluginConfig = async () => {
  const testingLibraryPlugin = await importModuleIfExists(
    'eslint-plugin-testing-library',
  )
  if (!testingLibraryPlugin) return []
  return [
    {
      files,
      ...testingLibraryPlugin.configs['flat/react'],
    },
  ]
}
