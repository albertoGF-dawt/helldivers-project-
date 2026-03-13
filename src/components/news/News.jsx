import { useEffect, useState } from 'react'
import { ref, onValue, remove, update } from 'firebase/database'
import { db } from '../../Firebase'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import "./news.css"

function News() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [newss, setNewss] = useState([])
    const [filter, setFilter] = useState('')
    const [editingNews, setEditingNews] = useState(null)
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editImage, setEditImage] = useState('')
    const [editCategory, setEditCategory] = useState('')

    useEffect(() => {
        const newsRef = ref(db, 'news')
        onValue(newsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                const list = Object.entries(data).map(([id, value]) => ({ id, ...value }))
                setNewss(list)
            } else {
                setNewss([])
            }
        })
    }, [])

    const handleDelete = async (id) => {
        if (!confirm('¿Seguro que quieres eliminar esta noticia?')) return
        try {
            await remove(ref(db, `news/${id}`))
        } catch (error) {
            console.error('Error al borrar:', error)
        }
    }

    const handleEditOpen = (news) => {
        setEditingNews(news.id)
        setEditTitle(news.title || '')
        setEditDescription(news.description || '')
        setEditImage(news.image || '')
        setEditCategory(news.category || '')
    }

    const handleEditClose = () => setEditingNews(null)

    const handleUpdate = async () => {
        if (!editTitle || !editDescription) return
        try {
            await update(ref(db, `news/${editingNews}`), {
                title: editTitle,
                description: editDescription,
                image: editImage,
                category: editCategory,
            })
            setEditingNews(null)
        } catch (error) {
            console.error('Error al actualizar:', error)
        }
    }

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
                        <div key={news.id} className="New1" onClick={() => navigate(`/news/${news.id}`)}>
                            {news.image && <img src={news.image} alt={news.title} />}
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            {news.category && <span className="news-category">{news.category}</span>}
                            <div className="news-actions">
                                <button className="news-btn edit-btn" onClick={(e) => { e.stopPropagation(); handleEditOpen(news) }}>Editar</button>
                                <button className="news-btn delete-btn" onClick={(e) => { e.stopPropagation(); handleDelete(news.id) }}>Borrar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {editingNews && (
                <div className="edit-modal-overlay" onClick={handleEditClose}>
                    <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Editar Noticia</h3>
                        <input className="edit-input" type="text" placeholder="Título" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        <textarea className="edit-input" placeholder="Descripción" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} rows={4} />
                        <input className="edit-input" type="text" placeholder="URL de imagen" value={editImage} onChange={(e) => setEditImage(e.target.value)} />
                        <select className="edit-input" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                            <option value="">-- Categoría --</option>
                            <option value="mission">Misión</option>
                            <option value="alert">Alerta</option>
                            <option value="update">Actualización</option>
                        </select>
                        <div className="edit-modal-actions">
                            <button className="news-btn edit-btn" onClick={handleUpdate}>Guardar cambios</button>
                            <button className="news-btn delete-btn" onClick={handleEditClose}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default News
