import { useEffect, useState } from 'react'
import { ref, onValue } from 'firebase/database'
import { db } from '../../Firebase'
import './RssFeed.css'

function RssFeed() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const newsRef = ref(db, 'news')
        onValue(newsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const list = Object.entries(data).map(([id, value]) => ({ id, ...value }))
                setNews(list)
            }
            setLoading(false)
        })
    }, [])

    const siteUrl = window.location.origin

    const generateRssXml = () => {
        const items = news.map(item => `
    <item>
      <title><![CDATA[${item.title || 'Sin título'}]]></title>
      <description><![CDATA[${item.description || ''}]]></description>
      <link>${siteUrl}/news/${item.id}</link>
      <guid isPermaLink="true">${siteUrl}/news/${item.id}</guid>
      ${item.category ? `<category>${item.category}</category>` : ''}
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`).join('')

        return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Helldivers 2 — Noticias de Supertierra</title>
    <link>${siteUrl}</link>
    <description>Últimas noticias del frente de batalla</description>
    <language>es-es</language>${items}
  </channel>
</rss>`
    }

    const handleDownload = () => {
        const blob = new Blob([generateRssXml()], { type: 'application/rss+xml' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'helldivers-rss.xml'
        a.click()
        URL.revokeObjectURL(url)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(`${siteUrl}/rss`)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="rss-page">
            <div className="rss-header">
                <img src="./logo-hell.svg" alt="Helldivers Logo" className="rss-logo" />
                <h1>Feed RSS</h1>
                <p>Suscríbete a las últimas noticias de Supertierra</p>
            </div>

            <div className="rss-url-row">
                <code>{siteUrl}/rss</code>
                <button className="rss-btn" onClick={handleCopy}>
                    {copied ? 'Copiado' : 'Copiar URL'}
                </button>
                <button className="rss-btn primary" onClick={handleDownload}>
                    Descargar XML
                </button>
            </div>

            {loading ? (
                <p className="rss-loading">Cargando...</p>
            ) : (
                <>
                    <div className="rss-news-list">
                        {news.length === 0 && <p className="rss-empty">No hay noticias disponibles.</p>}
                        {news.map(item => (
                            <a key={item.id} href={`/news/${item.id}`} className="rss-news-item">
                                <h3>{item.title || 'Sin título'}</h3>
                                <p>{item.description || 'Sin descripción'}</p>
                                {item.category && <span className="rss-category">{item.category}</span>}
                            </a>
                        ))}
                    </div>

                    <details className="rss-xml-preview">
                        <summary>Ver XML del feed</summary>
                        <pre>{generateRssXml()}</pre>
                    </details>
                </>
            )}
        </div>
    )
}

export default RssFeed