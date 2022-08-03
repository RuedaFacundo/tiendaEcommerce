import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Pregunta = (props) => {
  const [open, setOpen] = React.useState(false);
  const { pregunta, respuesta } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon className='anchoPreguntas negrita'>
          {pregunta}
        </ListItemIcon>
        <ListItemText />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon className='anchoPreguntas'>
            {respuesta}
          </ListItemIcon>
          <ListItemText />
        </ListItemButton>
      </List>
    </Collapse>
  </div>
  )
}

export default Pregunta
