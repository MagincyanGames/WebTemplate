import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'

import App from './App'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Use Vite's BASE_URL as the router basename so routes work when hosted on a subpath */}
    <HashRouter basename={import.meta.env.BASE_URL || '/'}>
      <App />
    </HashRouter>
  </StrictMode>
)
