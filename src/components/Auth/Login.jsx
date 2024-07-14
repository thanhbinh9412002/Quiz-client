import React, { useState, useRef } from 'react'
import user from '../../assets/user.png';
import './scss/login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/ApiFunction';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner9 } from "react-icons/im";

const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    
    const handleLogin = async() =>{
      const isValidEmail = validateEmail(email)
      if(!isValidEmail){
        toast.error("Invalid email !!!");
        if (emailRef.current) {
          emailRef.current.focus();
        }
        return;
      }
      if(!password){
        toast.error("Invalid password !!!");
        if (passwordRef.current) {
          passwordRef.current.focus();
        }
        return;
      }
      setIsLoading(true);
      let data = await postLogin(email, password);
      if(data && data.EC === 0){
        dispatch(doLogin(data))
        toast.success(data.EM);
        setIsLoading(false);
        navigate('/');
      }
      if(data && data.EC !== 0){
        setIsLoading(false);
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
                        placeholder="Enter email" 
                        required="" aria-required="true"
                        value={email} ref={emailRef}
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <input type={showPassword ? "text" : "password"}  
                        className="form-control _ge_de_ol"  name="password"
                        placeholder="Enter password" required="" 
                        aria-required="true" value={password} ref={passwordRef}
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
                  <button className="_btn_04" disabled={isLoading} onClick={()=> handleLogin()}>
                    {isLoading === true && <ImSpinner9 className="loaderIcon"/>}
                    <a> Log in</a>
                  </button>
                </div>

                <div className='form-group'>
                    <div className='row'>
                        <div className='col-7 p-2 text-center'>Don't have an account yet?</div>
                        <button onClick={()=> navigate('/register')} className='col-5 me-auto _btn_05'>Sign up</button>
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