import React from 'react'

function PokeCard({ id, img, name, setDataPokemons, loading }) {
  const handleClick = () => {

    setDataPokemons((prev) => {
      console.log(prev);
      return prev.filter(pokemons => pokemons.id != id)
    })

  }
  return (
    <>
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center'
      }} >
        <p style={{ color: `${id % 2 === 0 ? "#057f8d" : "#FA8072"}` }}>{id}</p>
        <img src={img} alt="" />
        <h3 style={{ color: `${id % 2 === 0 ? "#057f8d" : "#FA8072"}` }}>{name}</h3>
        <button onClick={handleClick} style={{
          backgroundColor: 'transparent',
          borderRadius: '8px', cursor: 'pointer'
        }}>❌</button>
      </div>
    </>
  )
}

export default PokeCard

