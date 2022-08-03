import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../Statics/css/Header.css'

const BarraDeBusqueda = () => {
  return (
    <div className="group">
      <SearchIcon />
      <input placeholder="Buscar..." type="search" className="input" />
    </div>
  );
}

export default BarraDeBusqueda