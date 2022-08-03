import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const IconHeader = () => {

  const handleClick = () => {
    window.location.href="carrito"
  }

  return (
    <IconButton onClick={handleClick} aria-label="cart" style={{ color: "white" }}>
      <Badge badgeContent={localStorage.getItem('compras').split(',').length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default IconHeader
