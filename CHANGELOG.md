## [4.0.5](https://github.com/imccausl/eslint-config/compare/v4.0.4...v4.0.5) (2025-10-31)


### Bug Fixes

* release with updated deps ([37dcadb](https://github.com/imccausl/eslint-config/commit/37dcadb2b55d7ffe5553544a9c6315f430a92a2d))

## [4.0.4](https://github.com/imccausl/eslint-config/compare/v4.0.3...v4.0.4) (2025-07-22)


### Bug Fixes

* use build script from dev-scripts ([#193](https://github.com/imccausl/eslint-config/issues/193)) ([88ab254](https://github.com/imccausl/eslint-config/commit/88ab254bac5194dfc17ff7c5bbfe4f8dc7a19002))

## [4.0.3](https://github.com/imccausl/eslint-config/compare/v4.0.2...v4.0.3) (2025-07-19)

### Bug Fixes

- fix typos in types paths ([#188](https://github.com/imccausl/eslint-config/issues/188)) ([0a0f8db](https://github.com/imccausl/eslint-config/commit/0a0f8db34696d35bc49acff964d6ecc5634ca236))

## [4.0.2](https://github.com/imccausl/eslint-config/compare/v4.0.1...v4.0.2) (2025-07-19)

### Bug Fixes

- add paths to type declarations in package.json ([#186](https://github.com/imccausl/eslint-config/issues/186)) ([e53a540](https://github.com/imccausl/eslint-config/commit/e53a5401c33111ee225650971e7abdea337dcfbd))

## [4.0.1](https://github.com/imccausl/eslint-config/compare/v4.0.0...v4.0.1) (2025-07-19)

### Bug Fixes

- publish declarations ([#185](https://github.com/imccausl/eslint-config/issues/185)) ([9127f70](https://github.com/imccausl/eslint-config/commit/9127f70242629bede45f0970b9525c5483b6c387))

# [4.0.0](https://github.com/imccausl/eslint-config/compare/v3.1.4...v4.0.0) (2025-07-08)

### Features

- remove prettier and eslint-plugin-prettier ([#174](https://github.com/imccausl/eslint-config/issues/174)) ([1f7ae0a](https://github.com/imccausl/eslint-config/commit/1f7ae0a215cb0a7740559b058343afd982713bdf))

### BREAKING CHANGES

- This update removes support for eslint-plugin-prettier. Using this plugin is not recommended by prettier, and often causes issues with yarn modern. As a result, it has been removed from this major version update. Configure prettier seprately instead.

- chore: add prettier config for project

- chore: update eslint-config

- chore: update eslint-config

## [3.1.4](https://github.com/imccausl/eslint-config/compare/v3.1.3...v3.1.4) (2025-07-08)

### Bug Fixes

- optional dependency requires optional rule ([#177](https://github.com/imccausl/eslint-config/issues/177)) ([d63640b](https://github.com/imccausl/eslint-config/commit/d63640bb7571701a584ba324fcad69ef7087d676))

## [3.1.3](https://github.com/imccausl/eslint-config/compare/v3.1.2...v3.1.3) (2025-07-08)

### Bug Fixes

- optional dependency causes crash when not available ([#175](https://github.com/imccausl/eslint-config/issues/175)) ([f245528](https://github.com/imccausl/eslint-config/commit/f245528b218bf75e2250d7a78732d2d6b7d5298c))

## [3.1.2](https://github.com/imccausl/eslint-config/compare/v3.1.1...v3.1.2) (2025-07-08)

### Bug Fixes

- release 3.1.2 including dependency updates ([#172](https://github.com/imccausl/eslint-config/issues/172)) ([6423e0e](https://github.com/imccausl/eslint-config/commit/6423e0ed2c5f89c2adc02e63cafe8a661b79d303))

## [3.1.1](https://github.com/imccausl/eslint-config/compare/v3.1.0...v3.1.1) (2025-07-08)

### Bug Fixes

- incorrect paths in package.json ([#171](https://github.com/imccausl/eslint-config/issues/171)) ([052f063](https://github.com/imccausl/eslint-config/commit/052f063e1c76948b83c4ef2918254ad1e4fac1ce))

# [3.1.0](https://github.com/imccausl/eslint-config/compare/v3.0.1...v3.1.0) (2025-07-08)

### Features

- make eslint-plugin-prettier optional ([#162](https://github.com/imccausl/eslint-config/issues/162)) ([bbe0112](https://github.com/imccausl/eslint-config/commit/bbe011209b26c0fd51d9d16f6474a8bb1a236c33))

## [3.0.1](https://github.com/imccausl/eslint-config/compare/v3.0.0...v3.0.1) (2024-12-08)

### Bug Fixes

- turn off no-named-as-default-member ([#99](https://github.com/imccausl/eslint-config/issues/99)) ([2f395cb](https://github.com/imccausl/eslint-config/commit/2f395cb4ed6eceb7939ac4532dd45a7f95d5c5f1))

# [3.0.0](https://github.com/imccausl/eslint-config/compare/v2.0.0...v3.0.0) (2024-12-07)

### Features

- update to use flat config and require eslint 9 ([#95](https://github.com/imccausl/eslint-config/issues/95)) ([cba2a39](https://github.com/imccausl/eslint-config/commit/cba2a391e756a0acd14d8bc729a4cbd37c808270))

### BREAKING CHANGES

- This version requires the eslint flat config format. There have also been a number of peer dependency version changes. Make sure you are on up to date versions of eslint and any eslint plugins you install to support this package.

# [2.0.0](https://github.com/imccausl/eslint-config/compare/v1.4.0...v2.0.0) (2024-08-17)

### Bug Fixes

- skip linting to publish new version ([02b7cec](https://github.com/imccausl/eslint-config/commit/02b7cecb7ce04020dfdff5c53382379a4ee50d8f))

### Features

- remove ban-types rule ([#42](https://github.com/imccausl/eslint-config/issues/42)) ([9172efd](https://github.com/imccausl/eslint-config/commit/9172efdf84233521d92f6043d32f93679570bc97))

### BREAKING CHANGES

- This config removes support for @typescript-eslint/eslint-plugin lower than 8.0. The ban-types rule has been removed and replaced with the new rules outlined here https://typescript-eslint.io/rules/ban-types/

# [1.4.0](https://github.com/imccausl/eslint-config/compare/v1.3.0...v1.4.0) (2024-08-05)

### Features

- turn off array-type rule by default ([#38](https://github.com/imccausl/eslint-config/issues/38)) ([7b47aab](https://github.com/imccausl/eslint-config/commit/7b47aab09ad906a1957264989ddc2d79890352e0))

# [1.3.0](https://github.com/imccausl/eslint-config/compare/v1.2.1...v1.3.0) (2024-08-05)

### Features

- turn off no-empty-function and type-def rules ([#37](https://github.com/imccausl/eslint-config/issues/37)) ([2a9116f](https://github.com/imccausl/eslint-config/commit/2a9116f4bce266f55056573ea6040b11800e53cf))

## [1.2.1](https://github.com/imccausl/eslint-config/compare/v1.2.0...v1.2.1) (2024-08-05)

### Bug Fixes

- update yarn to 4.3.1 and fix eslint peer range ([#18](https://github.com/imccausl/eslint-config/issues/18)) ([bed130a](https://github.com/imccausl/eslint-config/commit/bed130af0b3207af69bb284463840c86565adcfd))

# [1.2.0](https://github.com/imccausl/eslint-config/compare/v1.1.0...v1.2.0) (2024-02-21)

### Features

- add optional eslint-plugin-jest config ([#14](https://github.com/imccausl/eslint-config/issues/14)) ([32a4e55](https://github.com/imccausl/eslint-config/commit/32a4e5521b2a6baf201fdef5d4c99b71d97fb5b7))

# [1.1.0](https://github.com/imccausl/eslint-config/compare/v1.0.4...v1.1.0) (2024-02-13)

### Features

- add eslint-plugin-testing-library as peer dep and update readme ([#12](https://github.com/imccausl/eslint-config/issues/12)) ([2a7a5f4](https://github.com/imccausl/eslint-config/commit/2a7a5f45669c0fe45b503b060cc1f803480c7b63))

## [1.0.4](https://github.com/imccausl/eslint-config/compare/v1.0.3...v1.0.4) (2024-02-13)

### Bug Fixes

- generate changelog ([#8](https://github.com/imccausl/eslint-config/issues/8)) ([827b3a1](https://github.com/imccausl/eslint-config/commit/827b3a17a9d5b361bf188d7ca29e495d6c61886d))
- try to fix permissions and force publish ([#10](https://github.com/imccausl/eslint-config/issues/10)) ([b336b99](https://github.com/imccausl/eslint-config/commit/b336b99d3a2c18f074cf69d2612157e0959123f7))
- try to fix permissions and force publish ([#9](https://github.com/imccausl/eslint-config/issues/9)) ([4bbbc4d](https://github.com/imccausl/eslint-config/commit/4bbbc4d92f49370dd950d668000b2c570518eea2))
