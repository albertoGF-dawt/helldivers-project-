import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAedM4JVKJ6ukSP6Js_nM-yxU1irscaZhs",
    authDomain: "helldiversapp.firebaseapp.com",
    databaseURL: "https://helldiversapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "helldiversapp",
    storageBucket: "helldiversapp.firebasestorage.app",
    messagingSenderId: "354100511467",
    appId: "1:354100511467:web:a7a99d20490591b3f1f4ae",
    measurementId: "G-B15HYT4BLT"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)