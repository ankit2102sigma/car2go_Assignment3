// src/components/Register.js

import React, { useState } from 'react'

import axios from 'axios'
import './css/Registe.css'
import { API_URL } from '../utils/value.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password
      })

      console.log(response.data)

      if (response.data.success === true) {
        navigate('/login')
      } else {
        alert("Registration Failed")
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data)
      } else {
        alert('Network error occurred. Please try again later.')
      }
    }
  }

  return (
    <div className='main'>
      <React.Fragment>
        <div className='form'>
        <form className='forms mx-auto' onSubmit={handleSubmit}>
          <h4 className='text-center'>Sign Up</h4>
          <div className='mb-3 mt-5'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={event => setFirstName(event.target.value)}
            />
          </div>

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
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary mt-5'>
              Sign Up
            </button>
          </div>
          <p className='forgot-password text-right mt-3 '>
            Already registered <a href='/login'>Sign in?</a>
          </p>
        </form>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Register
