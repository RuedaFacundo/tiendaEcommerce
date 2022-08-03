import React from 'react'
import '../Statics/css/CardContacto.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardContacto = () => {
  return (
    <div className='card-container'>
      <div class="card">
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF1bw-lzoAlRg/profile-displayphoto-shrink_200_200/0/1638647150951?e=1665014400&v=beta&t=lm5Aj-cK0VbThZVP-YXs7LB1_vMou6tyM4zLZ2QM-EA" alt="" className='img'/>
        </div>
        <h1 className='cardTitle'>Facundo Rueda</h1>
        <div className='logos-contenedor'>
        <LinkedInIcon sx={{ fontSize: 40 }} className='iconMargin'></LinkedInIcon>
        <EmailIcon sx={{ fontSize: 40 }} className='iconMargin'></EmailIcon>
        <GitHubIcon sx={{ fontSize: 40 }} className='iconMargin'></GitHubIcon>
        </div>
      </div>
    </div>
  )
}

export default CardContacto
