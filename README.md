# PBS-Frontend

A modern React + TypeScript frontend template built with Vite and optimized with SWC. Features internationalization (i18n), ESLint + Prettier configuration, and ready-to-deploy scripts.

## Table of Contents

- [Getting Started](#getting-started)
- [Template Customization](#template-customization)
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

## Template Customization

Before using this template for your project, you need to customize several files to match your project's identity.

### 🔧 Required Changes

Follow these steps to adapt the template to your new project:

#### 1. Update Project Metadata in `package.json`

Open `package.json` and modify:

```json
{
  "name": "your-project-name", // Change to your project name (lowercase, no spaces)
  "version": "1.0.0", // Set your initial version
  "description": "Your project description", // Add this line with your description
  "author": "Your Name", // Add this line with your name
  "license": "MIT" // Add your license type
  // ... rest of the file
}
```

**Example:**

```json
{
  "name": "pokemon-battle-sim",
  "version": "1.0.0",
  "description": "A Pokemon battle simulator built with React",
  "author": "MagincyanGames"
}
```

#### 2. Update Page Title in `index.html`

Open `index.html` and change the title:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="%BASE_URL%vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Project Name</title>
    <!-- Change this -->
  </head>
  <!-- ... -->
</html>
```

**Optional:** Add meta tags for SEO:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="%BASE_URL%favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Your project description for SEO" />
  <meta name="keywords" content="your, keywords, here" />
  <meta name="author" content="Your Name" />
  <title>Your Project Name</title>
</head>
```

#### 3. Configure Vite Base Path in `vite.config.ts`

**IMPORTANT:** This determines where your app will be hosted.

Open `vite.config.ts`:

**For GitHub Pages deployment:**

```ts
export default defineConfig({
  base: '/YourRepoName/', // Replace with your GitHub repository name
  plugins: [react()],
})
```

**For root domain deployment (Vercel, Netlify, custom domain):**

```ts
export default defineConfig({
  base: '/', // Use root path
  plugins: [react()],
})
```

**Examples:**

- GitHub Pages: `base: "/pokemon-battle-sim/"` → deploys to `username.github.io/pokemon-battle-sim/`
- Custom domain: `base: "/"` → deploys to `yourdomain.com/`

#### 4. Update Favicon

Replace the default Vite favicon:

1. Create/obtain your favicon (`.ico`, `.png`, or `.svg`)
2. Place it in the `public/` folder
3. Update `index.html`:

```html
<link rel="icon" type="image/x-icon" href="%BASE_URL%favicon.ico" />
<!-- or for PNG -->
<link rel="icon" type="image/png" href="%BASE_URL%favicon.png" />
<!-- or for SVG -->
<link rel="icon" type="image/svg+xml" href="%BASE_URL%logo.svg" />
```

#### 5. Update Translations (Optional)

If using i18n, update translation files with your content:

**`public/locales/en/translation.json`:**

```json
{
  "appName": "Your Project Name",
  "welcome": "Welcome to Your Project",
  "description": "Your project description"
}
```

**`public/locales/es/translation.json`:**

```json
{
  "appName": "Nombre de tu Proyecto",
  "welcome": "Bienvenido a tu Proyecto",
  "description": "Descripción de tu proyecto"
}
```

#### 6. Update README (This File)

- Change the project title at the top
- Update the description
- Modify examples to match your project
- Add project-specific documentation

#### 7. Update Git Remote (If Forking)

If you forked/cloned this template, update the Git remote:

```powershell
# Remove old remote
git remote remove origin

# Add your new repository
git remote add origin https://github.com/YourUsername/YourRepoName.git

# Verify
git remote -v
```

### ✅ Customization Checklist

Use this checklist to ensure you've configured everything:

- [ ] Updated `package.json` name, version, description, and author
- [ ] Changed page title in `index.html`
- [ ] Added meta tags for SEO in `index.html`
- [ ] Configured `base` path in `vite.config.ts` (GitHub Pages or root)
- [ ] Replaced favicon in `public/` folder
- [ ] Updated favicon link in `index.html`
- [ ] Modified translation files in `public/locales/`
- [ ] Updated README.md title and description
- [ ] Changed Git remote to your repository
- [ ] Deleted or modified example components in `src/pages/`
- [ ] Customized global styles in `src/index.css`

### 🚀 Quick Setup Script

After customization, verify everything works:

```powershell
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (test)
npm run build

# Preview production build
npm run preview
```

If all commands run successfully, your template is ready! 🎉

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

The project supports multiple languages using `react-i18next` with automatic language detection.

### How it works

1. **Language detection** - Automatically detects user's language using multiple sources (see detection order below)
2. **Translation loading** - Loads translations from `public/locales/{lang}/translation.json`
3. **Fallback** - Defaults to English if translation not found
4. **Persistence** - Saves user's language choice in localStorage

### Language Detection Order

The system checks for the language in the following order (first match wins):

1. **Query string** - `?lng=es` in the URL
2. **Cookie** - `i18next` cookie value
3. **localStorage** - Saved language preference
4. **sessionStorage** - Temporary session storage
5. **navigator** - Browser language settings
6. **HTML tag** - `<html lang="...">` attribute

This order is configured in `src/i18n.ts`:

```ts
detection: {
  order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
  caches: ['localStorage'],  // Persist choice in localStorage
}
```

### Changing Language

#### Method 1: Query String (Highest Priority)

Add `?lng=` to the URL:

```
http://localhost:5173/?lng=es
http://localhost:5173/?lng=en
```

**Use case:** Share links with specific language, override all other settings.

#### Method 2: Programmatically in Code

Use the `changeLanguage` function in any component:

```tsx
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeToSpanish = () => {
    i18n.changeLanguage('es') // Saves to localStorage automatically
  }

  const changeToEnglish = () => {
    i18n.changeLanguage('en')
  }

  return (
    <div>
      <button onClick={changeToEnglish}>English</button>
      <button onClick={changeToSpanish}>Español</button>
      <p>Current language: {i18n.language}</p>
    </div>
  )
}
```

#### Method 3: localStorage (Manual)

Open browser DevTools Console and run:

```js
// Change to Spanish
localStorage.setItem('i18nextLng', 'es')
location.reload()

// Change to English
localStorage.setItem('i18nextLng', 'en')
location.reload()
```

#### Method 4: Cookie (Manual)

Set a cookie named `i18next`:

```js
// In browser console
document.cookie = 'i18next=es; path=/; max-age=31536000'
location.reload()
```

#### Method 5: Browser Language

Change your browser's language settings:

- **Chrome/Edge:** Settings → Languages → Preferred languages
- **Firefox:** Settings → Language → Choose language

The app will automatically detect it if no higher-priority method is set.

#### Method 6: HTML lang Attribute

Set in `index.html` (lowest priority):

```html
<html lang="es"></html>
```

This is overridden by all other methods.

### Adding Translations

1. Create/edit translation files:
   - `public/locales/en/translation.json`
   - `public/locales/es/translation.json`

Example `public/locales/en/translation.json`:

```json
{
  "welcome": "Welcome",
  "goodbye": "Goodbye"
}
```

Example `public/locales/es/translation.json`:

```json
{
  "welcome": "Bienvenido",
  "goodbye": "Adiós"
}
```

2. Use translations in components:

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('goodbye')}</p>
    </div>
  )
}
```

### Complete Example: Language Selector Component

```tsx
import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n, t } = useTranslation()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ]

  return (
    <div>
      <label htmlFor='language-select'>{t('selectLanguage')}:</label>
      <select
        id='language-select'
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}
```

### Configuration

See `src/i18n.ts` for the complete i18next setup:

```ts
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    ns: ['translation'],
    defaultNS: 'translation',
    react: { useSuspense: true },
  })
```

### Debugging Language Detection

Enable debug mode in `src/i18n.ts`:

```ts
i18n.init({
  debug: true, // Enable console logs
  // ... rest of config
})
```

Then check the browser console to see which detection method was used.

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
