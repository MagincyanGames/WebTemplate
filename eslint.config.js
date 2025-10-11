import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:prettier/recommended',
      'prettier',
    ],
    rules: {
      // Enforce single quotes and no semicolons
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
      '@typescript-eslint/semi': ['error', 'never'],
      // Enforce single quotes in JSX attributes
      'jsx-quotes': ['error', 'prefer-single'],
      // Let Prettier handle formatting (including JSX quotes)
      'prettier/prettier': [
        'error',
        { singleQuote: true, jsxSingleQuote: true, semi: false },
      ],
    },
  },
])
