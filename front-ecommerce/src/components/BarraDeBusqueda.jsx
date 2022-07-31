import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import '../Statics/css/Header.css'

const BarraDeBusqueda = () => {
  return (
    <TextField
      label="Buscar..."
      className='barraBusqueda'
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default BarraDeBusqueda