import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

import type { TsResolverOptions } from 'eslint-plugin-import-x'

export const settings = (
    typescriptResolverConfig: TsResolverOptions | null = {
        alwaysTryTypes: true,
    },
) => ({
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
        createTypeScriptImportResolver(typescriptResolverConfig),
    ],
})
