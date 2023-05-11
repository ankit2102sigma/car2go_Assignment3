// src/components/Register.js

import React, { useState } from 'react'

import axios from 'axios'
import './css/Registe.css'
import { API_URL } from '../utils/value.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Register = () => {
  const [name, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!name || !email || !password) {
      alert('Please enter all fields')
      return
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/
    if (!passwordPattern.test(password)) {
      alert(
        'Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.'
      )
      return
    }

    const namePattern = /^[a-zA-Z -]{1,20}$/

    if (!name || !namePattern.test(name)) {
      alert('Please enter a valid name')
      return
    }

    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password
      })

      console.log(response.data)

      if (response.data.success === true) {
        alert("Registered Successfully")
        navigate('/login')
      } else {
        alert('Registration Failed')
      }
    } catch (error) {
      if (error.response) {
        const { errors } = error.response.data
        if (errors && errors.email && errors.email.length > 0) {
          alert(errors.email[0])
        } else {
          alert('An error occurred. Please try again later.')
        }
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
