import { useTranslation } from 'react-i18next'
import "./News.css"

function News() {
    const { t } = useTranslation()

    return (
        <>
            <div className="News-main-container">
                <h1 id="tittleNews">{t('news.title')}</h1>
                <section className="NewsA">
                    <div className="News-container">
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>{t('news.example.title')}</h3>
                            <p>{t('news.example.description')}</p>
                        </div>
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>{t('news.example.title')}</h3>
                            <p>{t('news.example.description')}</p>
                        </div>
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>{t('news.example.title')}</h3>
                            <p>{t('news.example.description')}</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default News
