import "./news.css";
import newss from "../../data/news.json";
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function News() {
    const { t } = useTranslation()

    return (
        <>
            <div className="News-main-container">
                <h2 id="tittleNews">{t('news.page.title')}</h2>
                <div className="News-container">
                    {newss.map((news) => (
                        <div key={news.id} className="New1">
                            {news.image && <img src={news.image} alt={news.image} />}
                            <h3>{t(`news.news${news.id}.title`)}</h3>
                            <p>{t(`news.news${news.id}.description`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default News
