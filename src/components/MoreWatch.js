import React from 'react'
import "./MoreWatch.scss"

const MoreWatch = () => {
  return (
    <div className='morewatch'>
        <div className="title">
            <p>More To Watch</p>
        </div>
        <div className="description">
            <p>IMDb helps you select the perfect next show or movie to watch.</p>
        </div>
        <div className="guide">
            <button>Watch Guide</button>
            <button>More Popular</button>
        </div>
    </div>
  )
}

export default MoreWatch