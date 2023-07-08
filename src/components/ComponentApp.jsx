import React, { useEffect } from 'react'
import ButtonsJokes from './ButtonsJokes'
import { useState } from 'react'
import JokeList from './JokeList'

const getData = async (url) => {
    const res = await fetch(url, {
        headers: {"Accept": "application/json"}
    })
    return res.json()
}

function ComponentApp() {

    const [categories, setCategories] = useState(['house', 'door', 'cat', 'dad'])
    const [categorySearch, setCategorySearch] = useState('house')
    const [listJoke, setListJoke] = useState([])

    const awaitFunction = async (link) => {
        const joke = await getData(link)
        setListJoke(joke.results)  
    }

    useEffect(() => {
        awaitFunction(`https://icanhazdadjoke.com/search?term=${categorySearch}`)
    }, [categorySearch])

    const handleClick = (category) => {
        setCategorySearch(category)
    }

    return (
        <>
        <div style={{display:'flex', gap:'80px', justifyContent:'center' }}>
            {
                categories.map((category) => {
                    return <div >
                        <ButtonsJokes
                            category={category}
                            handleClick = {handleClick}
                            categorySearch = {categorySearch} />
                    </div>
                })
            }
        </div>
        <div>
        <JokeList list = {listJoke} />
        </div>
        </>
    )
   
}
export default ComponentApp