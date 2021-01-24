import React, { useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Auth from '../../lib/auth'

const LoginRegister = () => {

  const initState = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const [register, setRegister] = useState(false)
  const [userData, setUserData] = useState({ ...initState })

  const onInput = (e) => {
    const newData = { ...userData, [e.target.name]: e.target.value }
    setUserData(newData)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('here')
    const data = register ? userData : { email: userData.email, password: userData.password }
    const res = await axios.post('/api/login', data)
    Auth.setToken(res.data.token)
    setUserData({ ...initState })
    // props.history.push('/')
  }

  const switchToRegister = (e) => {
    e.preventDefault()
    setRegister(!register)
  }

  return (
    <div className="auth_wrapper">
      {console.log(userData)}
      <div className="auth_container">
        <form onSubmit={onSubmit}>
          {register &&
            <div>
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                onChange={onInput} 
                value={userData.username}
              />
            </div>
          }
          <div>
            <label>email</label>
            <input 
              type="text" 
              name="email" 
              onChange={onInput} 
              value={userData.email}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              onChange={onInput} 
              value={userData.password}
            />
          </div>
          {register &&
            <div>
              <label>Password Confirmation</label>
              <input 
                type="password" 
                name="passwordConfirmation" 
                onChange={onInput} 
                value={userData.passwordConfirmation}
              />
            </div>
          }
          <div>
            <input type="submit"/>
          </div>
          <button onClick={switchToRegister}>switch to {register ? 'LOGIN' : 'REGISTER'}</button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(LoginRegister)