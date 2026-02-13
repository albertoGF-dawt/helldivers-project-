import { useState } from "react"
import "./Footer.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cockie from "./pages/cockies/Cockie";

function Footer() {
    return (
        <div id="Footer-container">
            <p>© 2026 copyright</p>
            <a href="Cockies">página democrática que hay que poner para que leas sobre el uso de cockies y todo eso</a>
        </div>
    )
}

export default Footer
