import React, {useState, useEffect} from 'react'
import CardProducto from '../components/CardProducto'
import '../Statics/css/Home.css'
import CardAsesoramiento from '../components/CardAsesoramiento'
import BarraDeInformacion from '../components/BarraDeInformacion'

const Home = () => {
  let url = 'http://localhost:8080/categorias?categoria=Monitores'
  const [productosDestacados, setProductosDestacados] = useState(0)
  useEffect(()=> {
    fetch(url)
    .then(response => response.json())
    .then(data => setProductosDestacados(data))
  }, [])

  const mostrarCard = () => {
    if(productosDestacados.length > 0) {
      return productosDestacados[0].productos;
    }
  }

  return (
    <div className='home-contenedor'>
      <h3>Productos destacados</h3>
      <div className='destacados-contenedor'>
        {
          productosDestacados.length > 0 &&
          mostrarCard().map((item, i) => <div><CardProducto key={item.id} {...item}></CardProducto></div> )

        }
      </div>
      <div className='asesoramiento-contendor'>
        <CardAsesoramiento></CardAsesoramiento>
      </div>
      <div className='informacion-contenedor'>
        <BarraDeInformacion></BarraDeInformacion>
      </div>
    </div>
  )
}

export default Home