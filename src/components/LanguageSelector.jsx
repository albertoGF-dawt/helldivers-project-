import { useTranslation } from 'react-i18next'
import './LanguageSelector.css'

function LanguageSelector() {
    const { i18n } = useTranslation()

    const changeLanguage = (lng) => {
        if (i18n && typeof i18n.changeLanguage === 'function') {
            i18n.changeLanguage(lng)
        }
    }

    const currentLang = i18n?.language || 'es'

    return (
        <div className="language-selector">
            <button
                onClick={() => changeLanguage('es')}
                className={currentLang.startsWith('es') ? 'active' : ''}
            >
                ES
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={currentLang.startsWith('en') ? 'active' : ''}
            >
                EN
            </button>
        </div>
    )
}

export default LanguageSelector
