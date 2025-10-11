// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// 1. Importar los plugins instalados
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  // 2. Usar los plugins en la inicialización
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',

    // Configuración clave para que Backend funcione
    backend: {
      // Apunta a tu carpeta public/locales
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Configuración clave para que LanguageDetector funcione
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    ns: ['translation'],
    defaultNS: 'translation',

    react: {
      useSuspense: true,
    },
  })

export default i18n
