import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Header/>
    </div>
  )
}

export default App
