export const doesModuleExist = (moduleName: string) => {
  try {
    import.meta.resolve(moduleName)
    return true
  } catch {
    return false
  }
}

export const importModuleIfExists = async (moduleName: string) => {
  /**
   * Yarn pnp still throws an error that seems to
   * supercede this try catch so we need to check if it exists
   * first before importing, which is annoying and feels
   * extremely unnecessary.
   */
  if (!doesModuleExist(moduleName)) return null

  try {
    return (await import(moduleName)).default
  } catch {
    return null
  }
}

const getConfig = async (plugin: string, path: string[]) => {
  const module = await importModuleIfExists(plugin)
  if (!module) return null
  return path.reduce((acc, key) => acc[key], module)
}

export const importExtendedConfigs = async (
  modules: Array<{ module: string; path: string[] }>,
) => {
  const extendedConfigs = modules.map(({ module, path }) =>
    getConfig(module, path),
  )

  const resolvedConfigs = await Promise.all(extendedConfigs)
  return resolvedConfigs.filter(Boolean)
}
