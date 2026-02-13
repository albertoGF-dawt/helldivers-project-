import { useState } from "react"
import "./News.css"

function News() {
    return (
        <>
            <div className="News-main-container">
                <h1 id="tittleNews">Noticias Helldivers</h1>
                <section className="NewsA">
                    <div className="News-container">
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>TEXTO DE EJEMPLO</h3>
                            <p>TEXTO DE EJEMPLO</p>
                        </div>
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>TEXTO DE EJEMPLO</h3>
                            <p>TEXTO DE EJEMPLO</p>
                        </div>
                        <div className="New1">
                            <img src="" alt="" />
                            <h3>TEXTO DE EJEMPLO</h3>
                            <p>TEXTO DE EJEMPLO</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default News
