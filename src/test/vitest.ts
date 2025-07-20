import { importModuleIfExists } from '../util/index.js'

import { files } from './files.js'

export const createVitestPluginConfig = async () => {
  const vitestPlugin = await importModuleIfExists('@vitest/eslint-plugin')
  if (!vitestPlugin) return []
  return [
    {
      files,
      plugins: {
        vitest: vitestPlugin,
      },
      rules: {
        ...vitestPlugin.configs.recommended.rules,
        'vitest/max-nested-describe': ['error', { max: 3 }],
      },
    },
  ]
}
