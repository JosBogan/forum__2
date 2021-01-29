import React, { useState } from 'react'
import axios from 'axios'

import '../../styles/NewBoard.css'

import Auth from '../../lib/auth'

const NewPost = ({ setModal, misc: { boardData, getData } }) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const stop = (e) => {
    e.stopPropagation()
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log('id', match)
    const { data } = await axios.post(`/api/boards/${boardData._id}`, { title, text }, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
    getData()
    setModal(false)
  }

  const change = (e) => {
    switch (e.target.name) {
      case 'title': 
        setTitle(e.target.value)
        break
      case 'text':
        setText(e.target.value)
        break
      default:
        break
    }
  }

  return (
    <div className="new_board_container" 
      onClick={stop}
    >
      <form 
        onSubmit={onSubmit}
      >
        <div>
          <label>Title</label>
          <input 
            type="text"
            name="title"
            onChange={change} 
            value={title}
          />
        </div>
        <div>
          <label>Text</label>
          <input 
            type="text" 
            name="text"
            onChange={change} 
            value={text}
          />
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default NewPost