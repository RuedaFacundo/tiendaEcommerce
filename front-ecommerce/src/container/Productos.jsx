import React, {useState, useEffect} from 'react'
import Producto from '../components/Producto'

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
      <h1>Productos</h1>
      {productos.length > 0 && 
      productos.map((item, i) => <Producto key={item.id} {...item}></Producto> )
      }
    </div>
  )
}

export default Productos
