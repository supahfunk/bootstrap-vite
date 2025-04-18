import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

// Mimic CommonJS variables in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Crea un'istanza di FlatCompat per utilizzare configurazioni in formato eslintrc
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

export default tseslint.config(
  { ignores: ['dist', 'public/*.js'] },
  // Includiamo la configurazione di prettier
  ...compat.extends('prettier'),
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: 'readonly',
        JSX: 'readonly'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: importPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'no-unused-vars': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            [
              '^@/layouts',
              '^@/components',
              '^@/hooks',
              '^@/store',
              '^@/styles',
              '^@/utils',
              '^@/constants',
              '^@/webgl',
              '^@/base'
            ],
            // Style imports.
            ['^.+\\.?(css)$'],
            // Side effect imports.
            ['^\\u0000']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'import/no-duplicates': ['error', { 'prefer-inline': true }]
    }
  }
)
