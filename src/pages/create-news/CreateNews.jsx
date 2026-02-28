import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { db } from '../../Firebase'
import { useTranslation } from 'react-i18next'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './CreateNews.css'

function CreateNews() {
    const { t } = useTranslation()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async () => {
        if (!title || !description) return
        try {
            await push(ref(db, 'news'), {
                title,
                description,
                image,
                category,
            })
            setTitle('')
            setDescription('')
            setImage('')
            setCategory('')
            setSuccess(true)
            setTimeout(() => setSuccess(false), 3000)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <Header />
            <div className="create-news-container">
                <h2 className="create-news-title">{t('news.create')}</h2>

                <input
                    className="create-news-input"
                    type="text"
                    placeholder={t('news.form.title')}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="create-news-input"
                    placeholder={t('news.form.description')}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                />
                <input
                    className="create-news-input"
                    type="text"
                    placeholder={t('news.form.image')}
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <select
                    className="create-news-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">-- Categoría --</option>
                    <option value="mission">Misión</option>
                    <option value="alert">Alerta</option>
                    <option value="update">Actualización</option>
                </select>

                <button className="create-news-btn" onClick={handleSubmit}>
                    {t('news.form.submit')}
                </button>

                {success && <p className="create-news-success">{t('news.form.success')}</p>}
            </div>
            <Footer />
        </>
    )
}

export default CreateNews