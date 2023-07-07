import React from 'react'

function PokeCard({id,img,name,handleClick}) {

  return (
    <div style={{display:'flex', flexDirection:'column',
    alignItems:'center'}} >
        <p style={{color:`${id % 2 === 0 ? "#057f8d" : "#FA8072"}`}}>{id}</p>
        <img src={img} alt="" />
        <h3 style={{color:`${id % 2 === 0 ? "#057f8d" : "#FA8072"}`}}>{name}</h3>
        <button onClick={()=> handleClick(id)} style={{backgroundColor:'transparent', 
        borderRadius:'8px', cursor:'pointer'}}>❌</button>
    </div>
  )
}

export default PokeCard