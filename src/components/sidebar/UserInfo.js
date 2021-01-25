import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../../styles/UserInfo.css'

import Auth from '../../lib/auth'

import Modal from '../misc/Modal'
import NewBoard from '../boards/NewBoard'

const UserInfo = ({ setLoggedIn }) => {

  const [userData, setUserData] = useState({})
  const [modal, setModal] = useState(false)

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

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="sidebar_logged">
      <section>
        {console.log(userData.username)}
        {userData.username}
        <button onClick={logout} className="logout">LOGOUT</button>

      </section>
      <section>
        This is the extra stuff
        <button onClick={toggleModal}>Create A Board</button>
      </section>
      {modal && 
        <Modal 
          setModal={setModal}
          Component={NewBoard}
        />
      }
    </div>
  )
}

export default UserInfo