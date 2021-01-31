import React from 'react'

const UpDownVote = ({ upvotes, downvotes, vote, upvoted, downvoted }) => {

  const sendVote = (e) => {
    vote(e.target.name)
  }

  return (
    <div className="vote_container">
      <div className="vote upvote">
        <div className="vote_number">{upvotes}</div>
        <button className={`vote_icon ${downvoted ? 'voted_against' : ''}`} name="upvote" onClick={sendVote}></button>
      </div>
      <div className="vote downvote">
        <button className={`vote_icon ${upvoted ? 'voted_against' : ''}`} name="downvote" onClick={sendVote}></button>
        <div className="vote_number">{downvotes}</div>
      </div>
    </div>
  )
}

export default UpDownVote