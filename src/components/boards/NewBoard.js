import React, { useState } from 'react'
import axios from 'axios'

import '../../styles/NewBoard.css'

import Auth from '../../lib/auth'

const NewBoard = ({ setModal }) => {

  const [name, setName] = useState('')

  const stop = (e) => {
    e.stopPropagation()
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post('/api/boards', { name }, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
    setModal(false)
  }

  const change = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="new_board_container" onClick={stop}>
      {console.log(name)}
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input type="text" onChange={change} value={name}/>
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default NewBoard