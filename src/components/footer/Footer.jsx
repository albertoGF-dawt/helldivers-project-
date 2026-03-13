import { useTranslation } from 'react-i18next'
import "./Footer.css"

function Footer() {
    const { t } = useTranslation()

    return (
        <div id="footer-container">
            <p>{t('footer.copyright')}</p>
            <div className="footer-links">
                <a href="/Cockies">{t('footer.cookies')}</a>
                <a href="/rss" className="rss-link" title={t('footer.rss')}>
                    <span className="rss-badge">RSS</span> {t('footer.rss')}
                </a>
                <a href="https://github.com/albertoGF-dawt/helldivers-project-" target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>
            <div className="icon-container">
                <a href="https://x.com/helldivers2" target="_blank" rel="noreferrer">
                    <img className="x-icon" src="/X-icon.webp" alt="X Icon" />
                </a>
                <a href="https://www.youtube.com/@Helldivers2game" target="_blank" rel="noreferrer">
                    <img className="yt-icon" src="/YT-icon.png" alt="YouTube Icon" />
                </a>
                <a href="https://www.instagram.com/helldivers2game/" target="_blank" rel="noreferrer">
                    <img className="instagram-icon" src="/Instagram-icon.png" alt="Instagram Icon" />
                </a>
            </div>
        </div>
    )
}

export default Footer