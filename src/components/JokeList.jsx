import React from 'react'
import JokeCard from './JokeCard'

function JokeList({list}) {
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      
     {
      list.map((joke) => {
        return < JokeCard 
        joke ={joke.joke}
        />
      })
     }
    </div>
  )
}

export default JokeList