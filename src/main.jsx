import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './Layout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,

)
