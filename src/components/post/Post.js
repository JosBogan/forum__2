import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../styles/post.css'

import Auth from '../../lib/auth'

const Post = (props) => {

  const [postData, setPostData] = useState({})
  const [commentData, setCommentData] = useState('')

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const { data } = await axios.get(`/api/posts/${props.match.params.id}`)
    setPostData(data)
  }

  const comment = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(`/api/posts/${postData._id}`, { text: commentData }, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
    getData()
    setCommentData('')
  }

  const onChangeComment = (e) => {
    setCommentData(e.target.value)
  }

  if (Object.keys(postData).length < 1) return null
  return (
    <div>
      {console.log(postData)}
      <Link to={`/boards/${postData.board._id}`}><div className="board_banner">
        <h2>{postData.board.name}</h2></div></Link>
      <h1 className="post_title">{postData.title}</h1>
      <div>
        <p>{postData.text}</p>
      </div>
      {Auth.isAuthenticated() && <form onSubmit={comment}>
        <label htmlFor="comment">Comment</label>
        <textarea 
          name="comment"
          onChange={onChangeComment}
          value={commentData}
        />
        <div>
          <input type="submit"/>
        </div>
      </form>}
      {postData.comments && postData.comments.map(comment => (
        <div key={comment._id}>{comment.text}</div>
      ))}
    </div>
  )
}

export default Post