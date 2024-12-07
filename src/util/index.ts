export const importModuleIfExists = async (moduleName: string) => {
    try {
        return import(moduleName)
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
