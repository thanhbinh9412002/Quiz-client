import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'nprogress/nprogress.js'
import 'nprogress/nprogress.css'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux';
import store from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>

)
