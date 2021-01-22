import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PostCard from './postcard/PostCard'

function FrontPage() {

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    getData()
  }, [])

  
  const getData = async () => {
    const { data } = await axios.get('/api/posts')
    console.log(data)
    setPosts(data)
  }



  return (
    <div>
      {posts.map(post => (
        <PostCard key={post._id} post={post} getData={getData}/>
      )
      )}
    </div>
  )
}

export default FrontPage