import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';
const linkPokePika = 'https://pokeapi.co/api/v2/pokemon/pikachu'

function PokeList() {

  const [dataPika, setDataPika] = useState(null)
  const [dataPokemons, setDataPokemons] = useState(null)
  const [offset, setOffset] = useState(20)
  const [loading, setLoading] = useState(false)
  const linkAllPokemons = `https://pokeapi.co/api/v2/pokemon?limit=${offset}&offset=0`

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
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  useEffect(() => {
    setLoading(true)
    getDataPokemons(linkPokePika, linkAllPokemons)
  }, [offset])

  const handleClick = () => {
    setOffset(prev => prev += 10)
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
      <div>
        <button onClick={handleClick}>Give me more!!</button>
      </div>
      <br />
      <div style={{ display: 'flex', flexWrap: ' wrap', gap: '10px' }}>
        {
          loading ? <div class="lds-hourglass"></div> : dataPokemons?.sort((a, b) => b.id - a.id).map((pokemons) => {
            return <div style={{
              backgroundColor: `${pokemons.id % 2 === 0 ? "#FA8072" : "#057f8d"}`,
              padding: '8px', borderRadius: '8px'
            }}>
              {
                < PokeCard
                  setDataPokemons={setDataPokemons}
                  id={pokemons.id}
                  img={pokemons.sprites.front_default}
                  name={pokemons.name}
                />
              }
            </div>
          })
        }
      </div>
    </>
  )
}

export default PokeList