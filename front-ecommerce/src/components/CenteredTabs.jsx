import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

export default function CenteredTabs() {
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#e7e7e7' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Tab menu" centered selectionFollowsFocus>
            <Tab label="Home" href='/Home' value="1" />
            <Tab label="Productos" href='/Productos' value="2" />
            <Tab label="Carrito" href='/Carrito' value="3" />
            <Tab label="Preguntas Frecuentes" href='/PreguntasFrecuentes' value="4" />
            <Tab label="Contacto" href='/Contacto' value="5" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
