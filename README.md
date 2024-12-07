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

With dependencies installed, your eslint config can be extended like this:

```json
{
  "extends": [
    "@imccausl/eslint-config"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
