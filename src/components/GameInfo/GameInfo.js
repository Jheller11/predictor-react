import React from 'react'

const GameInfo = ({ homeTeam, awayTeam, venue, date, week }) => {
  return (
    <div>
      <div>Week {week}</div>
      <div>{date}</div>
      <div>
        {awayTeam.name} vs. {homeTeam.name}
      </div>
      <div>{venue}</div>
    </div>
  )
}

export default GameInfo
