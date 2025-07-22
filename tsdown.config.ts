import { defineMergedConfig } from '@imccausl/dev/tsdown'

export default defineMergedConfig({
  entry: [
    'src/index.ts',
    'src/react/index.ts',
    'src/base/index.ts',
    'src/test/index.ts',
  ],
  unbundle: true,
})

