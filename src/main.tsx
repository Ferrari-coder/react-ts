// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
//i removed the strictmode cos it was giving me unnecessary bug in the draggable part
)
