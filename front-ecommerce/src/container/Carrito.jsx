import React, {useState, useEffect} from 'react'
import ProductoSeleccionado from '../components/ProductoSeleccionado'

const Carrito = () => {
  let url = 'http://localhost:8080/productos'

  const [compra, setCompra] = useState(0)
  
  useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let compra = localStorage.getItem('compras')
      let compraArray = compra.split(",")
      let seleccion = []
      for(let item of compraArray) {
        for(let prod of data) {
          if(prod.id === item){
            seleccion.push(prod)
          }
        }
      }
      setCompra(seleccion)
    })
  }, [])

  return (
    <div>
      {compra.length > 0 && 
      compra.map((item, i) => <ProductoSeleccionado key={item.id + i} {...item}></ProductoSeleccionado> )
      }
    </div>
  )
}

export default Carrito
