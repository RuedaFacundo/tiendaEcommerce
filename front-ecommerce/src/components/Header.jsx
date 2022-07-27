import React from 'react'
import '../Statics/css/Header.css'
import IconHeader from '../components/IconHeader'
import AirplayIcon from '@mui/icons-material/Airplay';

const Header = () => {
  return (
    <header>
        <div className='logo-contenedor'>
          <AirplayIcon></AirplayIcon>
        </div>
        <div className='nombre-contenedor'>
          TIENDA DE INSUMOS INFORMATICOS
        </div>
        <div className='icono-contenedor'>
          Productos:
          <IconHeader></IconHeader>
        </div>
    </header>
  )
}

export default Header
