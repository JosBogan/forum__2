import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../../styles/post.css'

const Post = (props) => {

  const [postData, setPostData] = useState({})

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    const { data } = await axios.get(`/api/posts/${props.match.params.id}`)
    setPostData(data)
  }

  return (
    <div>
      <h1 className="post_title">{postData.title}</h1>
      {postData.comments && postData.comments.map(comment => (
        <div key={comment._id}>{comment.text}</div>
      ))}
    </div>
  )
}

export default Post