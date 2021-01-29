import React from 'react'
import { Link } from 'react-router-dom'

const SearchOptions = ({ boardData, open }) => {

  return (
    <div className={`search_options ${open && boardData.length > 0 ? 'search_options_open' : 'search_options_closed'}`}>
      <ul className="search_option_list">
        {boardData.map(board => (
          <Link 
            to={`/boards/${board._id}`}
            onMouseDown={(e) => e.preventDefault()}
            key={board._id}
          ><li>{board.name}</li></Link>
        ))}
      </ul>
    </div>
  )
}

export default SearchOptions