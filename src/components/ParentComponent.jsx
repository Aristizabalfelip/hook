import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from './Button';

function ParentComponent() {
    const [colorButton, setColorButton] = useState(true)

    const handleClick = () => {
        setColorButton(prev => !prev)
    } 
    return (
        <div style={{width:'70%',color: `${colorButton ? "black" : "white"}`,  border: `2px solid ${colorButton ? "black" : "white"}`, backgroundColor: `${colorButton ? "white" : "black"}`, padding:'15px'}}>
            <h1>Ejercicio 2</h1>
            <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quam facere velit ea nesciunt natus omnis voluptates laudantium,
                eveniet harum recusandae, dignissimos,
                libero sapiente odit nostrum ipsum illum id. Facilis, temporibus?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ex cumque dolorem eaque fugit autem tempore natus optio ut,
                architecto, ab molestias deserunt itaque! Exercitationem provident
                architecto pariatur enim modi dolore.</p>
                <Button handleClick={handleClick}/>

        </div>
    
    )
}

export default ParentComponent