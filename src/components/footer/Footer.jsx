import { useTranslation } from 'react-i18next'
import "./Footer.css"

function Footer() {
    const { t } = useTranslation()

    return (
        <div id="Footer-container">
            <p>{t('footer.copyright')}</p>
            <a href="Cockies">{t('footer.cookies')}</a>
        </div>
    )
}

export default Footer
