import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
const linkPokePika = 'https://pokeapi.co/api/v2/pokemon/pikachu'
const linkPokemons = 'https://pokeapi.co/api/v2/pokemon/'

function PokeList() {

  const [dataPika, setDataPika] = useState(null)
  const [dataPokemons, setDataPokemons] = useState(null)


  const getDataPokemons = async (linkPika, linkPokemons) => {

    const resPika = await fetch(linkPika)
    const dataPika = await resPika.json();

    const resPokemons = await fetch(linkPokemons)
    const dataPokemons = await resPokemons.json();

    const promise = await Promise.all(
      dataPokemons.results.map(async (pokemons) => {

        const resPokemons = await fetch(pokemons.url)
        const dataPokemons = await resPokemons.json()
        return dataPokemons
      }
      )

    )
    setDataPika(dataPika)
    setDataPokemons(promise)
  }

  useEffect(() => {
    getDataPokemons(linkPokePika, linkPokemons)
    
    
  }, [])

  const handleClick = (id) => {
  console.log('Hola', id);
}

  return (
    <>
      <div>
        {
          dataPika && < PokeCard
            id={dataPika.id}
            img={dataPika.sprites.front_default}
            name={dataPika.name}
          />
        }
      </div>
      <hr />
      <br />
      <div style={{ display: 'flex', flexWrap: ' wrap', gap: '10px' }}>
        {
          dataPokemons?.map((pokemons) => {
            return <div style={{
              backgroundColor:`${pokemons.id % 2 === 0 ? "#FA8072" : "#057f8d"}`,
              padding: '8px', borderRadius: '8px'
            }}>
              < PokeCard
                id={pokemons.id}
                img={pokemons.sprites.front_default}
                name={pokemons.name}
                handleClick={handleClick} />
            </div>
          })
        }
      </div>
    </>
  )
}

export default PokeList