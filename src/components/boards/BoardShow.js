import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BoardShow = (props) => {

  const [boardData, setBoardData] = useState({})

  useEffect(() => {
    getData()
  }, [props.match.params.id])

  const getData = async () => {
    const { data } = await axios.get(`/api/boards/${props.match.params.id}`)
    setBoardData(data)
  }

  return (
    <div>
      <h1>{boardData.name}</h1>
    </div>
  )
}

export default BoardShow