import React from 'react'

const SearchBar = ({ searchChange, searchValue }) => {

  return (
    <input 
      className="search" 
      type="text" 
      name="search"
      onChange={searchChange}
      value={searchValue}
    />
  )
}

export default SearchBar