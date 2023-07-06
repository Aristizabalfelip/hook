import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
const linkPokePika = 'https://pokeapi.co/api/v2/pokemon/pikachu'
const linkPokemons = 'https://pokeapi.co/api/v2/pokemon/'

function PokeList() {

  const [dataPika, setDataPika] = useState(null)
  const [dataPokemons, setDataPokemons] = useState(null)

  console.log(dataPokemons);

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
      <div>
        {
          dataPokemons?.map((pokemons) => {
            return < PokeCard
              id={pokemons.id}
              img={pokemons.sprites.front_default}
              name={pokemons.name}/>
        })
        }
      </div>
    </>
  )
}

export default PokeList