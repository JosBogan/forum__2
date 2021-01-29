import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import '../../styles/postcard.css'

import Auth from '../../lib/auth'
import UpDownVote from './UpDownVote'

const PostCard = ({ post, getData }) => {

  const vote = async (vote) => {
    const res = await axios.get(`/api/posts/${post._id}/${vote}`, {
      headers: {
        Authorization: `Bearer ${Auth.getToken()}`
      }
    })
    getData()
  }

  return (
    <div className="post_container">
      <UpDownVote 
        upvotes={post.upvotes.length} 
        downvotes={post.downvotes.length}
        vote={vote}  
      />
      <Link to={`/posts/${post._id}`}>
        <div className="post_content">
          <h2>
            {post.title}
          </h2>
          <div>{post.board.name} - {post.user.username}</div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard