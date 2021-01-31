import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PostCard from '../postcard/PostCard'
import Modal from '../misc/Modal'
import NewPost from '../post/NewPost'

import '../../styles/board.css'

import Auth from '../../lib/auth'

const BoardShow = (props) => {

  const [boardData, setBoardData] = useState({})
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getData()
  }, [props.match.params.id])

  const getData = async () => {
    const { data } = await axios.get(`/api/boards/${props.match.params.id}`)
    setBoardData(data)
  }

  const openModal = () => {
    setModal(true)
  }

  return (
    <div>
      {console.log(boardData)}
      <h1 className="board_header">{boardData.name}</h1>
      <div>
        {Auth.isAuthenticated() && <button onClick={openModal}>New Post</button>}
      </div>
      <section>
        {boardData.posts && boardData.posts.map(post => (
          <PostCard key={post._id} post={post} getData={getData}/>
        ))}
      </section>
      {modal && <Modal setModal={setModal} Component={NewPost} misc={{ props, boardData, getData }}/>}
    </div>
  )
}

export default BoardShow