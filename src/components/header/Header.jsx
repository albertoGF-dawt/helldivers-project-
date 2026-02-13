import { useState } from "react"
import "./header.css"

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="nav-container">
            <div
                id="title"
                onClick={() => setOpen(!open)}
                className={open ? "active" : ""}
            >
                <h1>Helldivers</h1>
                <p className="subtitle">Por Supertierra</p>
            </div>

            <nav className={`nav-panel ${open ? "open" : ""}`}>
                <a href="/">Inicio</a>
                <a href="/missions">Misiones</a>
                <a href="/arsenal">Arsenal</a>
                <a href="/settings">Configuración</a>
            </nav>
        </header>
    )
}

export default Header
