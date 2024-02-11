import type { ESLint } from 'eslint';
import { doesModuleExist } from '../util';


const overrides: ESLint.ConfigData['overrides'] = []
const extensions: ESLint.ConfigData['extends'] = []
const plugins: ESLint.ConfigData['plugins'] = []

if (doesModuleExist('eslint-plugin-testing-library')) {
extensions.push('plugin:testing-library/react')
}

if (doesModuleExist('eslint-plugin-vitest')) {
  extensions.push('plugin:vitest/recommended')
  plugins.push('vitest')
}

if (extensions.length || plugins.length) {
 overrides.push({
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: extensions,
    plugins,
 })
}

const config: ESLint.ConfigData = {
  env: {
    vitest: true,
  },
  overrides,
}

export default config
