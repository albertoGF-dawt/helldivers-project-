import { useState } from "react"
import { useTranslation } from 'react-i18next'
import "./header.css"

function Header() {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()

    return (
        <div className="header-wrapper">
            <img src="/logo-hell.svg" alt="Logo" />
            <header className="nav-container">
                <div
                    id="title"
                    onClick={() => setOpen(!open)}
                    className={open ? "active" : ""}
                >
                    <h1>{t('header.title')}</h1>
                    <p className="subtitle">{t('header.subtitle')}</p>
                </div>

                <nav className={`nav-panel ${open ? "open" : ""}`}>
                    <a href="/"><span>{t('nav.home')}</span></a>
                    <a href="/missions"><span>{t('nav.missions')}</span></a>
                    <a href="/arsenal"><span>{t('nav.arsenal')}</span></a>
                    <a href="/settings"><span>{t('nav.settings')}</span></a>
                </nav>
            </header>
        </div>
    )
}

export default Header
