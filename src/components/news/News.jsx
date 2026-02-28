import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../../Firebase'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import "./news.css"

function News() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [newss, setNewss] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        const newsRef = ref(db, 'news')
        onValue(newsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const list = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value
                }))
                setNewss(list)
            }
        })
    }, [])

    const filtered = filter ? newss.filter(n => n.category === filter) : newss

    return (
        <>
            <div className="News-main-container">
                <h2 id="tittleNews">{t('news.page.title')}</h2>
                <div className="news-filter-bar">
                    <button className={`filter-btn ${filter === '' ? 'active' : ''}`} onClick={() => setFilter('')}>Todas</button>
                    <button className={`filter-btn ${filter === 'mission' ? 'active' : ''}`} onClick={() => setFilter('mission')}>Misiones</button>
                    <button className={`filter-btn ${filter === 'alert' ? 'active' : ''}`} onClick={() => setFilter('alert')}>Alertas</button>
                    <button className={`filter-btn ${filter === 'update' ? 'active' : ''}`} onClick={() => setFilter('update')}>Actualizaciones</button>
                </div>
                <button className="create-news-btn" onClick={() => navigate('/create-news')}>
                    + {t('news.create')}
                </button>
                <div className="News-container">
                    {filtered.map((news) => (
                        <div key={news.id} className="New1">
                            {news.image && <img src={news.image} alt={news.title} />}
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            {news.category && <span className="news-category">{news.category}</span>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default News