import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import prettierConfig from 'eslint-config-prettier'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs['recommended-flat'],
  {
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': [
        'warn',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      '@stylistic/jsx-wrap-multilines': [
        'error',
        { declaration: false, assignment: false },
      ],
    },
  },
  prettierConfig,
]
