import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Cockie from "./pages/cockies/Cockies.jsx";
import Missions from "./pages/missions/Missions.jsx";
import LanguageSelector from './components/LanguageSelector'
import CreateNews from "./pages/create-news/CreateNews.jsx"

function App() {
  return (
    <div className="app">
      <LanguageSelector />
      <BrowserRouter>
        <Routes>
          <Route path="/create-news" element={<CreateNews />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Cockies" element={<Cockie />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App