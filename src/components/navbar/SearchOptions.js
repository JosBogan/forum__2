import React from 'react'
import { Link } from 'react-router-dom'

const SearchOptions = ({ boardData, focused }) => {

  return (
    <div className={`search_options ${focused && boardData.length > 0 ? 'search_options_open' : 'search_options_closed'}`}>
      {console.log('search_options' && boardData.length > 0 ? 'search_options_open' : 'search_options_closed')}
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