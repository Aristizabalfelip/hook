import React from 'react'
import JokeCard from './JokeCard'

function JokeList({ list, loading }) {
  console.log(loading);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {
        loading ? <div className="lds-default"><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div></div> :
          list.map((joke) => {
            return < JokeCard
              joke={joke.joke}
            />
          })}
    </div>
  )
}

export default JokeList
