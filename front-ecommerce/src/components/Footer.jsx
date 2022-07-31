import React from 'react'
import '../Statics/css/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer>
      <div className='footer-contacto'>
        <div className='footer-contacto-datos'>
          <p className='title'>ATENCIÓN AL CLIENTE:</p>
          <p>0810-110-0202</p>
          <p>consultas@gmail.com.ar</p>
          <p>WhatsApp +54 223 3423-4534 Lun. a Vie. de 9 a 18h. Sab de 10 a 14h</p>
        </div>
        <div className='footer-redes-sociales'>
          <p className='title'>SÉ EL PRIMERO EN ENTERARTE</p>
          <p>Seguinos y enterate de las ultimas novedades!</p>
          <div className='footer-logos'>
            <div className='icon'><FacebookIcon></FacebookIcon></div>
            <div className='icon'><InstagramIcon></InstagramIcon></div>
            <div className='icon'><TwitterIcon></TwitterIcon></div>
          </div>
        </div>
      </div>
      <div className='footer-contenedor'>
        Powered by <a href='https://www.linkedin.com/in/facundorueda/' className='name'>Facundo Rueda</a> - 2022. Todos los derechos reservados 
      </div>
    </footer>
  )
}

export default Footer
