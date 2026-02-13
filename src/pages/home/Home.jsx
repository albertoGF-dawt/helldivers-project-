import { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'


function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <Header className="Header"/>
                <Footer className="Footer" />
            </div>
        </div>
    )
}

export default Home
