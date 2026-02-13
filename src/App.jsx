import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Cockie from "./pages/cockies/Cockie";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/Cockies" element={<Cockie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
