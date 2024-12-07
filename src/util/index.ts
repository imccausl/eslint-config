export const importModuleIfExists = async (moduleName: string) => {
    try {
        return import(moduleName)
    } catch {
        return null
    }
}
