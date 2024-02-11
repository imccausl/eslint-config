import type { ESLint } from 'eslint';

const config: ESLint.ConfigData = {
  extends: [  
    '@imccausl/eslint-config/base',
    '@imccausl/eslint-config/react',
    '@imccausl/eslint-config/test',
  ],
  rules: {}
}

export = config
