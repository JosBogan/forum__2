import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'

const SearchComponent = () => {

  const [search, setSearch] = useState('')
  const [boardData, setBoardData] = useState([])
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    getData()
  }, [search])

  const searchChange = (e) => {
    console.log(e.target.value)
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
        setFocused={setFocused}
      />
      <SearchOptions 
        boardData={boardData} 
        focused={focused}
      />
    </div>
  )
}

export default SearchComponent