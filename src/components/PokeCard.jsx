import React from 'react'

function PokeCard({id,img,name}) {

  return (
    <div >
        <p>{id}</p>
        <img src={img} alt="" />
        <h3>{name}</h3>
    </div>
  )
}

export default PokeCard