import React from 'react'

const Producto = props => {
  const {nombre, descripcion, precio, foto} = props
  return (
    <>
      <img src={'http://localhost:8080'+foto[0].formats.thumbnail.url} alt="" />
      <h5>{nombre}</h5>
      <p>{descripcion}</p>
      <h5>{precio}</h5>
    </>
  )
}

export default Producto
