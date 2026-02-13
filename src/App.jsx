import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Cockie from "./pages/cockies/Cockies.jsx";
import Missions from "./pages/missions/Missions.jsx";
import LanguageSelector from './components/LanguageSelector'  // ← AHORA SÍ

function App() {
  return (
    <div className="app">
      <LanguageSelector />  {/* ← AHORA SÍ */}
      <BrowserRouter>
        <Routes>
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