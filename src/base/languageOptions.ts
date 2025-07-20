import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

const parser = {
  meta: tsParser.meta,
  parseForESLint: tsParser.parseForESLint,
}

export const languageOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  globals: {
    ...globals.node,
    ...globals.browser,
  },
  parser,
  parserOptions: {
    projectService: true,
    tsConfigRootDir: import.meta.dirname,
  },
}
