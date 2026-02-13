import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  es: {
    translation: {
      "header.title": "Helldivers",
      "header.subtitle": "Por Supertierra",
      "nav.home": "Inicio",
      "nav.missions": "Misiones",
      "nav.arsenal": "Arsenal",
      "nav.settings": "Configuración",
      "footer.copyright": "© 2026 copyright Comité de Defensa Planetaria",
      "footer.cookies": "página democrática que hay que poner para que leas sobre el uso de cookies y todo eso",
      "news.title": "Noticias Helldivers",
      "news.example.title": "TEXTO DE EJEMPLO",
      "news.example.description": "TEXTO DE EJEMPLO"
    }
  },
  en: {
    translation: {
      "header.title": "Helldivers",
      "header.subtitle": "For Super Earth",
      "nav.home": "Home",
      "nav.missions": "Missions",
      "nav.arsenal": "Arsenal",
      "nav.settings": "Settings",
      "footer.copyright": "© 2026 copyright Planetary Defense Committee",
      "footer.cookies": "democratic page you need to read about the use of cookies and all that",
      "news.title": "Helldivers News",
      "news.example.title": "EXAMPLE TEXT",
      "news.example.description": "EXAMPLE TEXT"
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

// Hacer i18n disponible globalmente para debugging
if (typeof window !== 'undefined') {
  window.i18n = i18n
}

export default i18n
