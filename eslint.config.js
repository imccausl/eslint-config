import eslintConfig from '@imccausl/eslint-config'

export default [
    {
        ignores: ['lib/', '.yarn/', 'node_modules/', '.pnp.*'],
    },
    ...eslintConfig,
    {
        files: ['src/**/*.ts'],
    },
]
