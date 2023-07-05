import React, { useEffect, useState } from 'react'

function Ejercicio1() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [counter, setCounter] = useState(0)
    const [colorButton, setColorButton] = useState('red')


    const handleClick = () => {
        setCounter(prev => prev += 1)
    }
   

    useEffect(() => {
        setColorButton(() => {
            return colors[Math.floor(Math.random() * colors.length)]
        })
    }, [counter])

    return (
        <div>
            <button onClick={handleClick} style={{ backgroundColor: colorButton }} >{`${counter} like`}</button>
        </div>
    )
}

export default Ejercicio1
