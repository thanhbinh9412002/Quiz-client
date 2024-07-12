import { useState } from 'react'
import './App.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
        <div className='header-container'>
          <Header/>
        </div>
        <div className='main-container'>
          <div className='sidenav-container'>
            
          </div>
          <div className='app-content'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default App
