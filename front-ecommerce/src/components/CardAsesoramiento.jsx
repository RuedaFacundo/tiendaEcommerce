import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../Statics/css/CardAsesoramiento.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CardAsesoramiento() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item md={16}>
          <Item md={8}>
            <div className='container'>
            <img src="https://www.soiinformatica.com/assets/images/mantenimiento-preventivo.png" alt="Imagen de asesoramiento" />
            <Typography variant="body2" className='text' color="text.secondary">
              Te brindamos un asesoramiento especial para el armado y reparacion de tu PC! <br /> <br />
              Contamos con las mejores herramientas y equipo de especializados para la reparacion de tu PC. <br /> <br />
              Arma tu PC, de acuerdo a tus necesidades, con los mejores componentes del mercado y al mejor precio.
            </Typography>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

/*
  HOME:
  SECTOR PARA ASESORAMIENTO CON IMAGEN Y TEXTO
  PROBAR DE HACER SECTOR CATEGOIA COMO FRAVEGA
  FOOTER DE FRAVEGA
  LOGO TEWIN


*/