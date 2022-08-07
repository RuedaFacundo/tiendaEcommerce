import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MonitorIcon from '@mui/icons-material/Monitor';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function NestedList() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{ fontSize: 30 }}>
          Categorias
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <MonitorIcon />
        </ListItemIcon>
        <ListItemText primary="Monitores" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HeadphonesIcon />
        </ListItemIcon>
        <ListItemText primary="Auriculares" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <KeyboardIcon />
        </ListItemIcon>
        <ListItemText primary="Teclados" />
      </ListItemButton>
    </List>
  );
}
