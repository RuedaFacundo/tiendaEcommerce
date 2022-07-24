import React from 'react'

const ProductoSeleccionado = props => {
  const {nombre, precio, foto} = props

  return (
    <>
      <img src={'http://localhost:8080'+foto[0].formats.thumbnail.url} alt="" />
      <h3>{nombre} {precio}</h3>
    </>
  )
}

export default ProductoSeleccionado