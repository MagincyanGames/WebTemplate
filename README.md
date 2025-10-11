# PBS-Frontend — Project overview

This project is a frontend template built with React + TypeScript using Vite and optimized with SWC. It includes i18n (internationalization) support, ESLint + Prettier configuration, and common scripts for development and deployment.

## Main technologies

- React (v19) for the UI library.
- TypeScript for static typing.
- Vite for fast development and bundling.
- SWC via `@vitejs/plugin-react-swc` for faster compilation and fast refresh.
- i18next + react-i18next for internationalization.

## Current configuration (exact files)

Below are the key configuration files currently used in this project (paths and relevant excerpts). Use these as reference when updating tooling or debugging.

- `vite.config.ts` (uses SWC React plugin)

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

- `eslint.config.js` (ESLint + TypeScript + Prettier)

Location: `eslint.config.js` (root). Key points:

```js
import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { '@typescript-eslint': tseslint, prettier: prettierPlugin },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:prettier/recommended',
      'prettier',
    ],
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'never'],
      '@typescript-eslint/semi': ['error', 'never'],
      'jsx-quotes': ['error', 'prefer-single'],
      'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true, semi: false }],
    },
  },
])
```

- `src/i18n.ts` (i18next initialization)

```ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    ns: ['translation'],
    defaultNS: 'translation',
    react: { useSuspense: true },
  })

export default i18n
```

## i18n (internationalization)

This project uses `react-i18next` together with `i18next-browser-languagedetector` and `i18next-http-backend` to detect the browser language and load translations from `public/locales/{lang}/translation.json`.

Example files:

- `public/locales/en/translation.json`
- `public/locales/es/translation.json`
- `src/i18n.ts` (i18next initialization and configuration)

## ESLint + Prettier configuration

The project integrates ESLint and Prettier to keep code consistent:

- ESLint with TypeScript support (`@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`).
- Useful plugins: `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.
- Prettier is installed and used together with `eslint-config-prettier` and `eslint-plugin-prettier` to avoid conflicts between linting rules and formatting.

Available commands (see `package.json`):

- `npm run lint` — Run ESLint across the project.
- `npm run format` — Run Prettier to format files (`src/**/*.{ts,tsx,js,jsx,json,css,md}`).

Configuration tips:

- For type-aware rules (stricter TypeScript checks) make sure ESLint reads `tsconfig.app.json` / `tsconfig.node.json` via `parserOptions.project` when enabling rules that require type information.
- `eslint-config-prettier` should be the last entry in ESLint's `extends` to disable rules that conflict with Prettier.

## Project structure

Main structure (short):

- `index.html` — Vite entry HTML.
- `package.json` — scripts and dependencies.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript configs.
- `vite.config.ts` — Vite configuration (uses `@vitejs/plugin-react-swc`).
- `eslint.config.js` — ESLint configuration (if present).
- `src/` — application source code:
  - `main.tsx` — app entry and React render.
  - `App.tsx` — root component.
  - `i18n.ts` — i18next initialization.
  - `assets/` — images and assets.
  - `index.css`, `App.css` — styles.
- `public/` — static files and translations:
  - `locales/en/translation.json`
  - `locales/es/translation.json`

Short tree example:

```
.
├─ public/
│  └─ locales/
│     ├─ en/translation.json
│     └─ es/translation.json
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ i18n.ts
   └─ assets/
```

## Useful scripts (from `package.json`)

- `npm run dev` — Start Vite in development mode (HMR / Fast Refresh).
- `npm run build` — Build for production (`tsc -b` then `vite build`).
- `npm run preview` — Serve the generated `dist` for a local preview (`vite preview`).
- `npm run lint` — Run ESLint.
- `npm run format` — Run Prettier.

Example (PowerShell):

```powershell
npm install
npm run dev
```

## Deployment

1. Create a production build:

```powershell
npm run build
```

2. Options to publish the generated `dist` folder:

- Vercel: connect your repo; Vercel will detect Vite and run `npm run build` automatically.
- Netlify: set the build command to `npm run build` and the publish directory to `dist`.
- GitHub Pages: use a GitHub Action to push `dist` to the `gh-pages` branch or use the `gh-pages` package.
- Static server (NGINX, Apache): copy the `dist` content to the server's public directory.

To preview `dist` locally:

```powershell
npm run preview
```

Notes about SWC and compatibility

- The project uses `@vitejs/plugin-react-swc` to use SWC instead of Babel for TSX/JSX transforms. This generally improves build times.
- Some very specific plugins may expect Babel transformations; if you hit compatibility issues you can switch to `@vitejs/plugin-react` (Babel) in `vite.config.ts`.

## Quick contribution guide

- Clone the repository.
- Install dependencies: `npm install`.
- Run in development: `npm run dev`.
- Format: `npm run format`.
- Lint: `npm run lint`.

---

README updated: added info about i18n, React, Vite, SWC, ESLint + Prettier, project structure and deployment.
