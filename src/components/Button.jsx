import React from 'react'

function Button({type,handleClick}) {
  return (
    <>
    <button className={`van-type ${type}`} onClick={handleClick}>{type}</button>
    </>
    
  )
}

export default Button