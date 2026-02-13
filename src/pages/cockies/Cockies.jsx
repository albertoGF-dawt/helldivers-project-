import "./Cockies.css"
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Cockie() {
    const { t } = useTranslation()

    return (
        <>
            <Header />
            <p id="NotSuperearth">
                {t('cockies.title')}<br /><br />

                {t('cockies.intro')}<br /><br />

                {t('cockies.data_collected')}<br /><br />

                {t('cockies.history')} <span className="square">█████████</span><br />
                {t('cockies.preferences')} <span className="square">███████</span><br />
                {t('cockies.credentials')} <span className="square">██████</span><br />
                {t('cockies.consumption')} <span className="square">███████████</span><br /><br />

                {t('cockies.classification')}<br /><br />

                1. {t('cockies.essential.title')}<br />
                {t('cockies.essential.description')} <span className="square">█</span>.<br /><br />

                2. {t('cockies.performance.title')}<br />
                {t('cockies.performance.description')} <span className="square">███</span>.<br /><br />

                3. {t('cockies.marketing.title')}<br />
                {t('cockies.marketing.description')} <span className="square">████████</span> {t('cockies.marketing.description2')} <span className="square">███████</span>.<br /><br />

                {t('cockies.persistence')} <span className="square">█████</span> {t('cockies.persistence2')} <span className="square">█████████</span> {t('cockies.persistence3')}<br /><br />

                {t('cockies.protocol.title')}<br /><br />

                {t('cockies.protocol.step1')} <span className="square">█</span> {t('cockies.protocol.step1b')}<br />
                {t('cockies.protocol.step2')}<br />
                {t('cockies.protocol.step3')} <span className="square">█████████</span>.<br />
                {t('cockies.protocol.step4')}<br /><br />

                {t('cockies.remember')}<br />
                {t('cockies.remember2')} <span className="square">███████████</span>.<br /><br />

                {t('cockies.keep_clean')}<br />
                {t('cockies.keep_democracy')}<br /><br />

                {t('cockies.closing')}
            </p>
            <Footer />
        </>
    )
}

export default Cockie;
