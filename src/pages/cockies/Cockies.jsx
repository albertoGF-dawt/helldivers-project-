import "./Cockies.css"
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Cockie() {
    const { t } = useTranslation()

    return (
        <>
            <Header />
            <div id="NotSuperearth">

                <h1>{t('privacy.title')}</h1>
                <p className="directiva">{t('privacy.subtitle')}</p>

                <h2>{t('privacy.privacy_title')}</h2>
                <p>{t('privacy.privacy_text')}</p>

                <h2>{t('privacy.cookies_title')}</h2>
                <p>{t('privacy.cookies_text')}</p>

                <h2>{t('privacy.sales_title')}</h2>
                <p>{t('privacy.sales_text')}</p>

                <p className="closing">{t('privacy.closing')}</p>

            </div>
            <Footer />
        </>
    )
}

export default Cockie;