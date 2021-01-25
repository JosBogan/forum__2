import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'

const UserInfo = ({ setLoggedIn }) => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    const { data } = await axios.get(`/api/users/${Auth.getUserId}`)
    console.log(data)
    setUserData(data[0])
  }

  const logout = () => {
    Auth.logout()
    setLoggedIn(false)
  }

  return (
    <div>
      {console.log(userData.username)}
      {userData.username}


      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default UserInfo