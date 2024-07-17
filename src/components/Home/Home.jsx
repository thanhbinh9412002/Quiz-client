import React from 'react';
import videoHomePage from '../../assets/video-homepage.mp4';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = (props) => {
    
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();

  return (
    <div className='homepage-container'>
        <video autoPlay muted loop>
            <source src={videoHomePage} type='video/mp4'/>
        </video>
        <div className='homepage-content'>
            <div className='title-1'>There's a better way to ask</div>
            <div className='title-2'>You don't want to make a boring form.
                And your audience won't answer one.
                Create a typeform instead-and make everyone happy.
            </div>
            <div className='title-3'>
                {isAuthenticated === false ?
                    <Button variant='outline-dark' onClick={()=>navigate('/login')}>Get's started</Button>
                    : <Button variant='outline-dark' onClick={()=>navigate('/users')}>Doing quiz now</Button>
                }

            </div>
        </div>
    </div>
  )
}

export default Home