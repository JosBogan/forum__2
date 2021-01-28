import { set } from 'mongoose'
import React from 'react'

const SearchBar = ({ searchChange, searchValue, setFocused }) => {



  return (
    <input 
      className="search" 
      type="text" 
      name="search"
      onChange={searchChange}
      value={searchValue}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

export default SearchBar