# PBS-Frontend

A modern React + TypeScript frontend template built with Vite and optimized with SWC. Features internationalization (i18n), ESLint + Prettier configuration, and ready-to-deploy scripts.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies](#technologies)
- [Internationalization (i18n)](#internationalization-i18n)
- [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Advanced Configuration](#advanced-configuration)

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```powershell
git clone <repository-url>
cd PBS-Frontend
```

2. Install dependencies:

```powershell
npm install
```

3. Start the development server:

```powershell
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in terminal)

---

## Project Structure

```
PBS-Frontend/
├── public/                    # Static assets
│   └── locales/              # Translation files
│       ├── en/
│       │   └── translation.json
│       └── es/
│           └── translation.json
├── src/
│   ├── api/                  # API integration layer
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   ├── pages/                # Page components
│   │   ├── Main.tsx
│   │   └── Main.css
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   ├── i18n.ts              # i18next configuration
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration
```

---

## Available Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start development server with hot reload  |
| `npm run build`   | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally          |
| `npm run lint`    | Run ESLint to check code quality          |
| `npm run format`  | Format code with Prettier                 |
| `npm run deploy`  | Deploy to GitHub Pages                    |

### Examples

**Development:**

```powershell
npm run dev
```

**Production build:**

```powershell
npm run build
npm run preview
```

---

## Technologies

This project uses modern web development tools:

- **React 19** - UI library with latest features
- **TypeScript** - Static type checking
- **Vite** - Fast build tool and dev server
- **SWC** - Fast TypeScript/JSX compiler (via `@vitejs/plugin-react-swc`)
- **React Router** - Client-side routing
- **i18next** - Internationalization framework

### Key Dependencies

```json
{
  "react": "^19.1.1",
  "react-router-dom": "^7.9.4",
  "i18next": "^25.6.0",
  "react-i18next": "^16.0.0"
}
```

---

## Internationalization (i18n)

The project supports multiple languages using `react-i18next`.

### How it works

1. **Language detection** - Automatically detects user's browser language
2. **Translation loading** - Loads translations from `public/locales/{lang}/translation.json`
3. **Fallback** - Defaults to English if translation not found

### Adding translations

1. Create/edit translation files:
   - `public/locales/en/translation.json`
   - `public/locales/es/translation.json`

2. Use translations in components:

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  return <h1>{t('welcome')}</h1>
}
```

### Configuration

See `src/i18n.ts` for i18next setup:

```ts
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    // ... more config
  })
```

---

## Code Quality

### ESLint + Prettier

The project enforces code quality with ESLint and Prettier integration.

**Run linter:**

```powershell
npm run lint
```

**Auto-format code:**

```powershell
npm run format
```

### Code Style Rules

- Single quotes for strings
- No semicolons
- 2-space indentation
- JSX uses single quotes

These rules are enforced automatically via `eslint.config.js` and Prettier configuration.

---

## Deployment

### GitHub Pages

This project is configured to deploy to GitHub Pages at a subpath (e.g., `https://username.github.io/WebTemplate/`).

#### Configuration

The following files are configured for GitHub Pages deployment:

**1. `vite.config.ts`** - Sets the base path:

```ts
export default defineConfig({
  base: '/WebTemplate/', // Replace with your repo name
  plugins: [react()],
})
```

**2. `src/main.tsx`** - Router basename:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
  <App />
</BrowserRouter>
```

#### Deployment Steps

**Option 1: Using gh-pages package (Recommended)**

1. Build the project:

```powershell
npm run build
```

2. Deploy to GitHub Pages:

```powershell
npm run deploy
```

This will push the `dist/` folder to the `gh-pages` branch.

3. Enable GitHub Pages in your repository settings:
   - Go to **Settings** → **Pages**
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Click **Save**

**Option 2: GitHub Actions**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Important: Update Base Path

When deploying to a different repository, update the `base` path in `vite.config.ts`:

```ts
base: "/YourRepoName/",  // Must match your GitHub repository name
```

### Other Deployment Options

**Vercel:**

1. Connect your GitHub repository
2. Vercel auto-detects Vite and builds automatically
3. No additional configuration needed

**Netlify:**

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Set in Netlify dashboard or `netlify.toml`

**Static Server (NGINX/Apache):**

1. Run `npm run build`
2. Copy contents of `dist/` to your web server's public directory
3. Configure server to serve `index.html` for all routes (SPA fallback)

---

## Advanced Configuration

### Using SWC vs Babel

This project uses SWC for faster builds. To switch to Babel:

1. Install Babel plugin:

```powershell
npm install -D @vitejs/plugin-react
```

2. Update `vite.config.ts`:

```ts
import react from '@vitejs/plugin-react' // instead of react-swc

export default defineConfig({
  plugins: [react()],
})
```

### TypeScript Configuration

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - App-specific settings
- `tsconfig.node.json` - Node/build scripts settings

### Environment Variables

Create `.env` files for different environments:

```
.env                # All environments
.env.local          # Local overrides (gitignored)
.env.production     # Production only
.env.development    # Development only
```

Access in code:

```ts
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run linter: `npm run lint`
5. Format code: `npm run format`
6. Commit changes: `git commit -m 'Add my feature'`
7. Push to branch: `git push origin feature/my-feature`
8. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

**README Structure:** From basic getting started → project overview → daily usage → deployment → advanced topics
