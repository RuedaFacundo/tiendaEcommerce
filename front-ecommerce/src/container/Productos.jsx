import React, {useState, useEffect} from 'react'
import CardProducto from '../components/CardProducto'
import Categorias from '../components/Categorias'
import '../Statics/css/Productos.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Productos = () => {
  let url = 'http://localhost:8080/productos'
  const [productos, setProductos] = useState(0)
  useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(data => setProductos(data))
  }, [])

  return (
    <div>
      <h1 className='titleProducts'>Productos</h1>
      <div className='productos-contenedor'>
        <div className='categorias-contenedor display'>
          <Categorias></Categorias>
        </div>
        <div className='cards-contenedor'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {productos.length > 0 && 
              productos.map((item, i) => <div className='cardProduct'><CardProducto key={item.id} {...item}></CardProducto></div> )
              }
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Productos