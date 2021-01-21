import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FrontPage() {

  // const [boards, setBoards] = useState([])

  // useEffect(() => {
  //   setBoards(getBoards())
  // }, [])

  // const getBoards = async () => {
  //   const { data } = await axios.get('/api/boards')
  //   setBoards(data)
  // }

  const [ boards, setBoards ] = useState([])

  useEffect(() => {
    getData()
  }, [])

  
  const getData = async () => {
    const { data } = await axios.get('/api/boards')
    console.log(data)
    setBoards(data)
  }



  return (
    <div>
      {console.log(boards)}
      {boards.map(cheese => <div key={cheese._id}>{cheese.name}</div>)}
    </div>
  )
}

export default FrontPage