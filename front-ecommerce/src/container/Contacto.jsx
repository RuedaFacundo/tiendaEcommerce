import React from 'react'
import CardContacto from '../components/CardContacto'
import '../Statics/css/CardContacto.css'
import Typography from '@mui/material/Typography';

const Contacto = () => {
  return (
    <div className='contacto-contenedor'>
      <h1 className='h1'>Contacto</h1>
      <div className='cardAndText'>
        <CardContacto></CardContacto>
        <Typography variant="h5" color="text.secondary">
        Soy Licenciado en Administración 🎓 y Técnico Universitario en Programación. 💻 <br />  <br />

        Luego de recibirme de licenciado y de trabajar en el ámbito de la administración por 4 años, decidí reorientar mi carrera profesional saliendo de mi zona de confort e incursionar en el mundo de la programación. <br />  <br />

        Actualmente, me desempeño en el puesto de Java Developer, combinando aptitudes y habilidades blandas desarrolladas en mi carrera como Licenciado, con el conocimiento técnico obtenido en la Tecnicatura. <br />  <br />

        Tengo claro que el camino de la evolución es el aprendizaje, por eso me encuentro constantemente realizando cursos y aprendiendo nuevas tecnologías para ser un profesional mas completo. 📈 <br />  <br />
        </Typography>
      </div>
    </div>
  )
}

export default Contacto
