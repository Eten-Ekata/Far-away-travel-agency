import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JonasProvider } from './context/FarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <JonasProvider>
  <App />
  </JonasProvider>
  </React.StrictMode>,
)
