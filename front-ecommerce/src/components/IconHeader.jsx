import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const IconHeader = () => {
  return (
    <IconButton aria-label="cart" style={{ color: "white" }}>
      <Badge badgeContent={localStorage.getItem('compras').split(',').length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default IconHeader
