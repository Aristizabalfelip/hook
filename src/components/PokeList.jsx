import React, { useEffect } from 'react'
const linkPokeApi = 'https://pokeapi.co/api/v2/pokemon/'
function PokeList() {

  const getDataPokemons = async (link) => {
    const res = await fetch(link)
    const data = await res.json();
    console.log(data);
  }


  useEffect(() => {
    getDataPokemons(linkPokeApi);
  })

  return (
    <div></div>
  )
}

export default PokeList