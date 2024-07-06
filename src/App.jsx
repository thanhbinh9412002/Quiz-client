import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import User from './components/User/User'; 
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Router>
        <div className='header-container'>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='users' element={<User/>}/>
          <Route path='admins' element={<Admin/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
