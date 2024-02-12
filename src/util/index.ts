export const doesModuleExist = (moduleName: string) => {
    try {
        require.resolve(moduleName)
        return true
    } catch {
        return false
    }
}
