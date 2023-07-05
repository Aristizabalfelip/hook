import React, { useState } from 'react'

function Button({handleClick}) {
    const [color, setColor] = useState(true)
    const handelClick = () => {
        setColor(prev => !prev)
        handleClick()
    } 


  return (
    <button onClick={handelClick} style={{padding:'15px', border:'none', backgroundColor:'transparent',  fontSize: '2em'}}>{color ? "🌙" : "☀️"}</button>
    )
}

export default Button