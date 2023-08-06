import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    {/* forgot to wrap the app with browser routerer */}
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
)
