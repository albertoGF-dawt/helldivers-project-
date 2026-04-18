import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ref, onValue } from 'firebase/database'
import { db } from '../../Firebase'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './NewsDetail.css'
import { saveFileInFormat } from "../../Utils/file-export";

function NewsDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const newsRef = ref(db, `news/${id}`)
        onValue(newsRef, (snapshot) => {
            const data = snapshot.val()
            setNews(data)
            setLoading(false)
        })
    }, [id])

    const exportJSON = () => {
        if (!news) return
        saveFileInFormat("json", news, `news-${id}.json`)
    }

    const exportXML = () => {
        if (!news) return

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<news>
    <title>${news.title}</title>
    <description>${news.description}</description>
    <category>${news.category || ''}</category>
    <image>${news.image || ''}</image>
</news>`

        saveFileInFormat("xml", xml, `news-${id}.xml`)
    }

    const exportCSV = () => {
        if (!news) return

        const csv = `title,description,category,image
"${news.title}","${news.description}","${news.category || ''}","${news.image || ''}"`

        saveFileInFormat("csv", csv, `news-${id}.csv`)
    }
    return (
        <>
            <Header />
            <div className="news-detail-container">
                {loading && <p className="news-detail-loading">Cargando...</p>}

                {!loading && !news && (
                    <p className="news-detail-notfound">Noticia no encontrada.</p>
                )}

                {!loading && news && (
                    <article className="news-detail-card">
                        {news.image && (
                            <img src={news.image} alt={news.title} className="news-detail-img" />
                        )}
                        {news.category && (
                            <span className="news-detail-category">{news.category}</span>
                        )}
                        <h1 className="news-detail-title">{news.title}</h1>
                        <p className="news-detail-description">{news.description}</p>
                    </article>
                )}

                <div className="news-export-buttons">
                    <button onClick={exportJSON}>Exportar JSON</button>
                    <button onClick={exportXML}>Exportar XML</button>
                    <button onClick={exportCSV}>Exportar CSV</button>
                </div>
                <button className="news-detail-back" onClick={() => navigate('/')}>
                    Volver a noticias
                </button>
            </div>
            <Footer />
        </>
    )
}

export default NewsDetail
