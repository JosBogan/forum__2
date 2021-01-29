import React, { useRef, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const SearchBar = ({ searchChange, searchValue, setOpen, location }) => {

  const input = useRef(null)

  useEffect(() => {
    setOpen(false)
    input.current.blur()
  }, [location.pathname])
  

  return (
    <input 
      className="search" 
      type="text" 
      name="search"
      onChange={searchChange}
      value={searchValue}
      ref={input}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    />
  )
}

export default withRouter(SearchBar)