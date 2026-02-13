import { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import News from '../../components/news/News'


function Home() {
    return (
        <div className="home">
            <div className='Header-center'>
                <Header />
            </div>

            <div className="home-center">
                <News />
            </div>
            <Footer />
        </div>
    )
}


export default Home
