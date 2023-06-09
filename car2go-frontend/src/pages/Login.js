
import React, { useState } from 'react'

import axios from 'axios'
import './css/Registe.css'
import { API_URL } from '../utils/value.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async event => {
    if (!email || !password) {
      alert('Please enter all fields');
      return;
    }
  
    const emailValidation = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailValidation.test(email)) {
      alert('Enter valid email');
      return;
    }
  
  
  
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
  
      if (response.data.success === true && response.data.role === 'admin') {
        sessionStorage.setItem('admin', true);
        navigate('/admin');
        localStorage.setItem('loggedInUser', JSON.stringify({ isAdmin: true }));
      } else if (response.data.success === true) {
        const userId = response.data.user_id;
        alert('Login successfully');
        sessionStorage.setItem('userId', userId);
        sessionStorage.setItem('user', true);
        localStorage.setItem('loggedInUser', JSON.stringify({ isAdmin: false }));
        navigate('/home');
      }
      else{
        alert("Enter Valid Login credentials");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert('Login failed');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  
  
  

  return (
    <React.Fragment>
      <div className='form'>
      <form className='form mx-auto' onSubmit={handleSubmit}>
        <h4 className='text-center'>Login</h4>

        <div className='mb-3 mt-4'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
  <div className='mb-3'>
              <label className='form-label'>Password</label>
              <div className='input-group'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='form-control'
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                <button
                  type='button'
                  className='btn btn-outline-secondary'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary mt-5'>
            Login
          </button>
        </div>
        <p className='forgot-password text-right mt-3 '>
          Not registered? <a href='/'>Sign in?</a>
        </p>
      </form>
      </div>
    </React.Fragment>
  )
}

export default Login

