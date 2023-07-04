import React, { useEffect, useState } from 'react'

function Ejercicio1() {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [counter, setCounter] = useState(0)
    const [colorButton, setColorButton] = useState(0)


    const handleClick = () => {
        setCounter(prev => prev += 1)
           
    }
    // const changeColor = () => {
    //     currentColorIndex++;
    //     if (currentColorIndex === colors.length) {
    //         currentColorIndex = 0;
    //       }
    //     return colors[currentColorIndex];
    // }



    return (
        <div>
            <button onClick={handleClick} style={{ backgroundColor: `${changeColor()}` }} >{`${counter} like`}</button>
        </div>
    )
}

export default Ejercicio1

// style={{ backgroundColor: `${changeColor}` }}