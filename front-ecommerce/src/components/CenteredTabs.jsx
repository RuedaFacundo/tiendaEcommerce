import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CenteredTabs = (props) => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#e7e7e7' }}>
      <Tabs centered>
        <Tab label="Home" href='/Home'/>
        <Tab label="Productos" href='/Productos'/>
        <Tab label="Carrito" href='/Carrito'/>
        <Tab label="Preguntas Frecuentes" href='/PreguntasFrecuentes'/>
        <Tab label="Contacto" href='/Contacto'/>
      </Tabs>
    </Box>
  );
}

export default CenteredTabs
