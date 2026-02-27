import { useTranslation } from 'react-i18next'
import "./Footer.css"

function Footer() {
    const { t } = useTranslation()

    return (
        <div id="Footer-container">
            <p>{t('footer.copyright')}</p>
            <a href="Cockies">{t('footer.cookies')}</a>
            <div className='Icon-container'>
                <a href="https://x.com/helldivers2">
                    <img className='X-icon' src="/X-icon.webp" alt="X Icon" />
                </a>
                <a href="https://www.youtube.com/@Helldivers2game">
                    <img className='YT-icon' src="/YT-icon.png" alt="YouTube Icon" />
                </a>
                <a href="https://www.instagram.com/helldivers2game/">
                    <img className='Instagram-icon' src="/Instagram-icon.png" alt="Instagram Icon" />
                </a>
            </div>
        </div>
    )
}

export default Footer
