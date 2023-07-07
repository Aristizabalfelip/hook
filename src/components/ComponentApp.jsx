import React, { useEffect } from 'react'
import ButtonsJokes from './ButtonsJokes'
import { useState } from 'react'

const getData = async (url) => {
    const res = await fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })
    return res.json()
}

function ComponentApp() {

    const [categories, setCategories] = useState(['house', 'door', 'cat', 'dad'])

    const awaitFunction = async () => {
        const joke = await getData('https://icanhazdadjoke.com/search?term=door', {
        })
    }



    useEffect(() => {
        awaitFunction()
    }, [])

















    return (
        <div style={{display:'flex', gap:'20px', justifyContent:'space-between', width:'80%'}}>
            {
                categories.map((category) => {
                    return <div >
                        <ButtonsJokes
                            category={category} />
                    </div>
                })
            }
        </div>
    )
}

export default ComponentApp