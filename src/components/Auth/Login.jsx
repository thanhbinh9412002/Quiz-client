import React, { useState } from 'react'
import user from '../../assets/user.png';
import './scss/login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/ApiFunction';
import { toast } from 'react-toastify';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async() =>{
        let data = await postLogin(email, password);
        if(data && data.EC === 0){
            toast.success(data.EM);
            navigate('/');
            // handleClose();
            // props.setCurrentPage(1);
            // await props.fetchListUsers(1);
        }
        if(data && data.EC !== 0){
            toast.error(data.EM);
        }
    }
  return (
    <div className="form-02-main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="_lk_de">
              <div className="form-03-main">
                <div className="logo">
                  <img src={user}/>
                </div>
                <div className="form-group">
                  <input type="text" name="email" 
                        className="form-control _ge_de_ol"  
                        placeholder="Enter Email" 
                        required="" aria-required="true"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <input type={showPassword ? "text" : "password"}  
                        className="form-control _ge_de_ol"  name="password"
                        placeholder="Enter Password" required="" 
                        aria-required="true" value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
                    <span
                        className="position-absolute icon-showpassword"
                        onClick={handleShowPassword}>
                        {showPassword ? <MdOutlineVisibilityOff size={24} /> 
                                    : <MdOutlineRemoveRedEye size={24} />}
                    </span>
                </div>

                <div className="checkbox form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" >
                      Remember me
                    </label>
                  </div>
                  <a href="###">Forgot Password</a>
                </div>

                <div className="form-group">
                  <div className="_btn_04" onClick={()=> handleLogin()}>
                    <a href="#">Login</a>
                  </div>
                </div>

                <div className='form-group'>
                    <div className='row'>
                        <div className='col-7 p-2 text-center'>Don't have an account yet?</div>
                        <button className='col-5 me-auto _btn_05'>Sign up</button>
                    </div>
                </div>

                <div className='form-group text-center'>
                    <span className='back' onClick={()=>navigate('/')}> &#60;&#60; Go to home</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login