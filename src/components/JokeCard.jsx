import React from 'react'

function JokeCard({ joke }) {
  return (
    <div style={{ width: '60%' }} >
      <p style={{
        borderRadius: '8px', backgroundColor: '#e8ffe3',
        padding: '8px'
      }}>{joke}🤣</p>
    </div>
  )
}

export default JokeCard