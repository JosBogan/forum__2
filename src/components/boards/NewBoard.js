import React from 'react'

import '../../styles/NewBoard.css'

const NewBoard = () => {

  const stop = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="new_board_container" onClick={stop}>NEW BOARD</div>
  )
}

export default NewBoard