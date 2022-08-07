import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// SE DEJA PARA CONTINUAR LA SECCION DE UN SOLO PRODUCTO.

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Producto2(props) {
  const {nombre, descripcion, precio, foto, id} = props
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <img src={'http://localhost:8080'+foto[0].formats.thumbnail.url} alt="" />
        </Box>
        <Box gridColumn="span 4">
          <p>{descripcion}</p>
        </Box>
        <Box gridColumn="span 8">
          <h5>{nombre}</h5>
          <h5>{precio}</h5>
          <button>Comprar</button>
        </Box>
      </Box>
    </Box>
  );
}