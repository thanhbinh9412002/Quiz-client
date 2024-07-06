import React from 'react'
import videoHomePage from '../../assets/video-homepage.mp4'

const Home = (props) => {
  return (
    <div className='homepage-container'>
        <video autoPlay muted loop>
            <source src={videoHomePage} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Home