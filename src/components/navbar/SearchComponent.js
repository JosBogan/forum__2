import React, { useState } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'

const SearchComponent = () => {

  const [search, setSearch] = useState('')
  const [boardData, setBoardData] = useState([])

  const searchChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  const getData = async () => {
    const { data } = await axios.get('/api/boards')
    console.log(data)
  }



  return (
    <div className="nav_search">
      <SearchBar 
        searchChange={searchChange} 
        searchValue={search}
      />
      <SearchOptions />
    </div>
  )
}

export default SearchComponent