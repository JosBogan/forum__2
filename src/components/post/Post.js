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
    console.log(data)
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
  }

  const onChangeComment = (e) => {
    setCommentData(e.target.value)
  }

  return (
    <div>
      <Link to={`/boards/${postData.board}`}><div className="board_banner"></div></Link>
      <h1 className="post_title">{postData.title}</h1>
      <form onSubmit={comment}>
        <label htmlFor="comment">Comment</label>
        <textarea 
          name="comment"
          onChange={onChangeComment}
          value={commentData}
        />
        <div>
          <input type="submit"/>
        </div>
      </form>
      {postData.comments && postData.comments.map(comment => (
        <div key={comment._id}>{comment.text}</div>
      ))}
    </div>
  )
}

export default Post