import React from 'react'
import '../Statics/css/CardContacto.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardContacto = () => {

  const handleClickLk = () => {
    window.location.href="https://www.linkedin.com/in/facundorueda/"
  }

  const handleClickGmail = () => {
    window.location.href="mailto:facundorueda14@gmail.com"
  }

  const handleClickGitHub = () => {
    window.location.href="https://github.com/RuedaFacundo"
  }

  return (
    <div className='card-container'>
      <div class="card">
        <div>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF1bw-lzoAlRg/profile-displayphoto-shrink_200_200/0/1638647150951?e=1665014400&v=beta&t=lm5Aj-cK0VbThZVP-YXs7LB1_vMou6tyM4zLZ2QM-EA" alt="" className='img'/>
        </div>
        <h1 className='cardTitle'>Facundo Rueda</h1>
        <div className='logos-contenedor'>
        <LinkedInIcon onClick={handleClickLk} sx={{ fontSize: 40 }} className='iconMargin'></LinkedInIcon>
        <EmailIcon onClick={handleClickGmail} sx={{ fontSize: 40 }} className='iconMargin'></EmailIcon>
        <GitHubIcon onClick={handleClickGitHub} sx={{ fontSize: 40 }} className='iconMargin'></GitHubIcon>
        </div>
      </div>
    </div>
  )
}

export default CardContacto
