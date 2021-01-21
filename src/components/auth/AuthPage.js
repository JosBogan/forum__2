import React from 'react'
import { Switch, Route } from 'react-router-dom'

import '../../styles/auth.css'

import Login from './Login'
import Register from './Register'

const AuthPage = () => {
  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </div>
  )
}

export default AuthPage