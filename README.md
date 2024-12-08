# eslint-config

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![CI](https://github.com/imccausl/eslint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/imccausl/eslint-config/actions/workflows/ci.yml)

A sharable eslint configuration with react and testing defaults.

## Usage

Includes a base config and configs for react and testing with @testing-library/react and vitest.

To use the base config, install the config as well as it's dependencies:

```bash
yarn add -D \
  @imccausl/eslint-config \
  eslint \ 
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-import-x \ 
  eslint-import-resolver-typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

If you'd like to use the react config, include the following dependencies:

```bash
yarn add -D \
  @tanstack\eslint-plugin-query \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

And for the testing config, include these dependencies:

```bash
yarn add -D \
  @vitest/eslint-plugin \
  @typescript-eslint/utils \
  eslint-plugin-testing-library
```

### Flat Config

Version 3+ uses the eslint flat config. You can set it up like this:

```js
import eslintConfig from '@imccausl/eslint-config'

export default [
  ...eslintConfig
  // other configs
]
```

If you are using earlier verisons of eslint, or are not yet ready for the flat config, you can continue to use version 2.
