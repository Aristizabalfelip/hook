import React from 'react'

function ButtonsJokes({ category, handleClick, categorySearch }) {
  const emoji = (palabra) => {
    if (palabra == 'house') {
      return '🏠'
    } else if (palabra == 'door') {
      return '🚪'
    } else if (palabra == 'cat') {
      return '🐈‍⬛'
    } else if (palabra == 'dad') {
      return '🧔‍♂️'
    }}

    return (
      <>
        <div>
          <button style={{
            padding: '9px', borderRadius: '5px', border: 'none', cursor: 'pointer',
            backgroundColor: `${categorySearch  === category ? "#ffe9ed" : "#ccb6ba"}` , fontSize:'30px' 
          }}
            onClick={() => handleClick(category)}>{emoji(category)}</button>
        </div>
        <hr style={{borderColor:`${categorySearch  === category ? "#ffe9ed" : "transparent"}`}} />
        <div>

        </div>
      </>
    )
  }

  export default ButtonsJokes