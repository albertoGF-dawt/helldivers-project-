import "./Missions.css";
import missions from "../../data/missions.json";
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Missions() {
    const { t } = useTranslation()

    return (
        <>
            <Header />
            <div className="News-main-container">
                <h2 id="tittleNews">{t('missions.page.title')}</h2>
                <div className="News-container">
                    {missions.map((mission) => (
                        <div key={mission.id} className="New1">
                            {mission.image && <img src={mission.image} alt={mission.title} />}
                            <h3>{t(`missions.mission${mission.id}.title`)}</h3>
                            <p>{t(`missions.mission${mission.id}.description`)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Missions
