import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'

const SearchComponent = (props) => {

  const [search, setSearch] = useState('')
  const [boardData, setBoardData] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    getData()
  }, [search])


  const searchChange = (e) => {
    setSearch(e.target.value)
  }

  const getData = async () => {
    if (!search) {
      setBoardData([])
      return
    }
    const { data } = await axios.get(`/api/boards/search/${search}`)
    setBoardData(data)
  }



  return (
    <div className="nav_search">
      <SearchBar 
        searchChange={searchChange} 
        searchValue={search}
        open={open}
        setOpen={setOpen}
      />
      <SearchOptions 
        boardData={boardData} 
        open={open}
      />
    </div>
  )
}

export default SearchComponent