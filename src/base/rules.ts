import { doesModuleExist } from '../util/index.js'

const rules: Record<string, any> = {
  /** Errors */
  'no-var': 'error',
  'prefer-const': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    },
  ],
  camelcase: 'off',

  /* Conditionals */
  eqeqeq: 'error',
  'no-nested-ternary': 'error',

  /* Imports */
  'no-duplicate-imports': 'error',
  'sort-imports': [
    'error',
    {
      /* Prefer import/order declaration sort due to  autofixer */
      ignoreDeclarationSort: true,
    },
  ],
  'import-x/default': 'error',
  'import-x/export': 'error',
  'import-x/named': 'error',
  'import-x/newline-after-import': 'error',
  'import-x/no-absolute-path': 'error',
  'import-x/no-duplicates': 'error',
  'import-x/no-mutable-exports': 'error',
  'import-x/no-self-import': 'error',
  'import-x/no-useless-path-segments': 'error',
  'import-x/no-unresolved': 'error',
  'import-x/no-named-as-default-member': 'off',
  'import-x/order': [
    'error',
    {
      'newlines-between': 'always',
      /* Note: Modules are assigned groups based on checks against the module path. */
      groups: [
        'unknown',
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
      ],
      alphabetize: { order: 'asc' },
      pathGroupsExcludedImportTypes: ['builtin'],
      warnOnUnassignedImports: true,
    },
  ],

  /* Typescript Types */
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/ban-ts-comment': 'warn', // Discourage disabling static analysis.
  '@typescript-eslint/no-empty-object-type': 'warn',
  '@typescript-eslint/no-unsafe-function-type': 'warn',
  '@typescript-eslint/no-wrapper-object-types': 'warn',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
  ],
  '@typescript-eslint/no-duplicate-enum-values': 'warn',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
}

if (doesModuleExist('eslint-plugin-prettier')) {
  rules['prettier/prettier'] = [
    'error',
    {
      printWidth: 80,
      tabWidth: 4,
      semi: false,
      trailingComma: 'all',
      singleQuote: true,
      allowParens: 'always',
    },
  ]
}

export { rules }
