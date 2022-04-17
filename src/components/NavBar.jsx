import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='nav-bar-contenedor'>
        <Link to="/inicio" className='nav-bar-item'>Game Buy</Link>
        <Link to="/biblioteca" className='nav-bar-item'>Mi biblioteca</Link>
        <Link to="/" className='nav-bar-item'>Cerrar sesión</Link>
        Viñetas pendientes por añadir
    </nav>
  )
}

export default NavBar