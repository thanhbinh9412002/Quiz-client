import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Admin from './components/Admin/Admin';
import User from './components/User/User'; 
import Home from './components/Home/Home';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register.jsx';
import ListQuiz from './components/User/ListQuiz.jsx';
import DetailQuiz from './components/User/DetailQuiz.jsx';
import ManageQuiz from './components/Admin/Content/Quiz/ManageQuiz.jsx';

const NotFound = () =>{
    return(
        <div className='container mt-3 alert alert-danger'>
            404. Not found data with your current URL
        </div>
    )
}

const Layout = (props) => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={<App/>}>
                <Route index element={<Home/>}/>
                <Route path='users' element={<ListQuiz/>}/>
                
            </Route>
            <Route path='/quiz/:id' element={<DetailQuiz/>}/>

            <Route path='admins' element={<Admin/>}>
                <Route index element={<DashBoard/>}/>
                <Route path='manage-users' element={<ManageUser/>}/>
                <Route path='manage-quizzes' element={<ManageQuiz/>}/>
            </Route>

            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
        />
    </BrowserRouter>
  )
}

export default Layout