import eslintConfig from '@imccausl/dev/eslint-config/base'

export default [
    {
        ignores: ['lib/', '.yarn/', 'node_modules/', '.pnp.*'],
    },
    ...eslintConfig,
    {
        files: ['src/**/*.ts'],
    },
]
