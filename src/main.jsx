/**
 * Main entry point for the React application
 * This file initializes the React app and renders it to the DOM
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create root element and render the main App component with StrictMode enabled
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
