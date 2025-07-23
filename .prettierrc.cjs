// eslint-disable-next-line @typescript-eslint/no-require-imports
const prettierConfig = require('@imccausl/dev/prettier-config')
/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  ...prettierConfig,
}

module.exports = config
