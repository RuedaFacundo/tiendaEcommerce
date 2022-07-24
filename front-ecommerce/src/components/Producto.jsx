import React from 'react'

const Producto = props => {
  const {nombre, descripcion, precio, foto, id} = props
  const handleClick = () => {
    let compra = localStorage.getItem('compras')
    if (compra === null) {
      compra = id
    } else {
      compra = compra + ',' + id
    }
    console.log(compra);
    localStorage.setItem('compras', compra)
  }
  return (
    <>
      <img src={'http://localhost:8080'+foto[0].formats.thumbnail.url} alt="" />
      <h5>{nombre}</h5>
      <p>{descripcion}</p>
      <h5>{precio}</h5>
      <button onClick={handleClick}>Comprar</button>
    </>
  )
}

export default Producto