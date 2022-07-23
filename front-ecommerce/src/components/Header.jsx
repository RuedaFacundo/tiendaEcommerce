import React from 'react'
import { Link } from 'react-router-dom'
import '../Statics/css/Header.css'

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to='/Productos'>Productos</Link></li>
        <li><Link to='/Carrito'>Carrito</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </header>
  )
}

export default Header
