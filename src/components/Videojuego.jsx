import React from 'react'

const Videojuego = ({imagen, titulo, precio}) => {
  return (
    <div className='card-contenedor'>
        <img className='card-imagen' src={imagen} alt="" />
        <h3>{titulo}</h3>
        <p>{precio}</p>
    </div>
  )
}

export default Videojuego