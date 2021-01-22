import React, { useState } from 'react'
import axios from 'axios'

import '../../styles/postcard.css'

import UpDownVote from './UpDownVote'

const PostCard = ({ post }) => {

  const vote = async (vote) => {
    const res = await axios.get(`/api/posts/${post.id}/${vote}`)
  }

  return (
    <div className="post_container">
      <UpDownVote 
        upvotes={post.upvotes.length} 
        downvotes={post.downvotes.length}
        vote={vote}  
      />
      <div className="post_content">
        <h2>
          {post.title}
        </h2>
        <div>{post.board.name} - {post.user.username}</div>
      </div>
      {console.log(post)}
    </div>
  )
}

export default PostCard