import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Statics/css/Header.css'

const BarraDeBusqueda = () => {
  return (
    <div class="group">
      <SearchIcon />
      <input placeholder="Buscar..." type="search" class="input" />
    </div>
  );
}

export default BarraDeBusqueda