import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
      {console.log(posts)}
      {posts.map(post => <div key={post._id}>{post.title}</div>)}
    </div>
  )
}

export default FrontPage