import Axios from 'axios'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import '../../styles/auth.css'

import Auth from '../../lib/auth'
import Login from './Login'
import Register from './Register'

const AuthPage = (props) => {

  const [register, setRegister] = useState(false)
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const onInput = (e) => {
    const newData = { ...userData, [e.target.name]: e.target.value }
    setUserData(newData)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = register ? userData : { email: userData.email, password: userData.password }
    const res = await Axios.post('/api/login', data)
    Auth.setToken(res.data.token)
    console.log(props.history.push('/'))
  }


  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <form onSubmit={onSubmit}>
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={onInput}/>
          </div>
          <div>
            <label>email</label>
            <input type="text" name="email" onChange={onInput}/>
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" onChange={onInput}/>
          </div>
          <div>
            <label>Password Confirmation</label>
            <input type="password" name="passwordConfirmation" onChange={onInput}/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage