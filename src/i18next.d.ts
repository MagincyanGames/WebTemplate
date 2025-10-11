
import type translation from '../public/locales/en/translation.json' 

// Amplía el módulo i18next
declare module 'i18next' {
  interface CustomTypeOptions {
    // 1. Define el namespace por defecto (si lo usas)
    defaultNS: 'translation'; 
    
    // 2. Define la estructura de tus recursos
    resources: {
      translation: typeof translation;
      // Si tienes más namespaces, añádelos aquí (ej: 'common': typeof commonJson)
    };
  }
}