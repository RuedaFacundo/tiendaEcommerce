import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function OptionHeader() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color="white">
        <Link underline="hover" color="white" href='/Productos'>
          Productos
        </Link>
        <Link
          underline="hover"
          color="white"
          href='/Carrito'
        >
          Carrito
        </Link>
        <Link
          underline="hover"
          color="white"
          href='/'
          aria-current="page"
        >
          Home
        </Link>
      </Breadcrumbs>
    </div>
  );
}