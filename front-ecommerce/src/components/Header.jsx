import React from 'react'
import '../Statics/css/Header.css'
import IconHeader from '../components/IconHeader'
import BarraDeBusqueda from '../components/BarraDeBusqueda'

const Header = () => {
  return (
    <header>
        <div className='logo-contenedor'>
          <img src="https://www.venex.com.ar/fil/logo/header_logo_nuevo_facebook.png" alt="Logo" width={80}/>
        </div>
        <div className='nombre-contenedor'>
          <BarraDeBusqueda></BarraDeBusqueda>
        </div>
        <div className='icono-contenedor'>
          Productos:
          <IconHeader></IconHeader>
        </div>
    </header>
  )
}

export default Header
