// @ts-expect-error no types for this package yet
import nodeImportResolver from 'eslint-import-resolver-node'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export const settings = {
    settings: {
        'import-x/external-module-folders': ['node_modules', '.yarn'],
        'import-x/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
                '.mts',
                '.cts',
                '.js',
                '.mjs',
                '.cjs',
                '.jsx',
            ],
        },
        'import-x/resolver-next': [
            nodeImportResolver,
            createTypeScriptImportResolver({
                alwaysTryTypes: true,
            }),
        ],
    },
}
