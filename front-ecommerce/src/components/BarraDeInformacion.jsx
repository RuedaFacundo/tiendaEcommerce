import React from 'react'
import '../Statics/css/BarraDeInformacion.css'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const BarraDeInformacion = () => {
  return (
    <div className='barra-contenido'>
      <div className='barra-pago infoItem'>
        <div className='pago-img infoImg'>
          <CreditCardIcon fontSize='large'></CreditCardIcon>
        </div>
        <div className='pago-info'>
          <span className='infoTitle'>PAGÁ EN HASTA 12 CUOTAS</span><br />
          con las principales tarjetas <br />
          de credito <br />
        </div>
      </div>
      <div className='barra-envio infoItem'>
        <div className='envio-img infoImg'>
          <LocalShippingIcon fontSize='large'></LocalShippingIcon>
        </div>
        <div className='envio-info'>
          <span className='infoTitle'>RECIBÍ TU PRODUCTO</span><br />
          en más de 100 puntos <br />
          en todo el país
        </div>
      </div>
      <div className='barra-envio-rapido infoItem'>
        <div className='envio-rapido-img infoImg'>
          <RocketLaunchIcon fontSize='large'></RocketLaunchIcon>
        </div>
        <div className='envio-rapido-info'>
          <span className='infoTitle'>ELEGÍ ENVÍO EXPRESS</span><br />
          Si sos de Mar del Plata <br />
          elegí envío express y recibilo antes
        </div>
      </div>
    </div>
  )
}

export default BarraDeInformacion
