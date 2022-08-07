import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../Statics/css/CardProducto.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardProducto(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {nombre, descripcion, precio, foto, id} = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    let compra = localStorage.getItem('compras')
    if (compra === null) {
      compra = id
    } else {
      compra = compra + ',' + id
    }
    console.log(compra);
    localStorage.setItem('compras', compra)
  }

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <div className='cardImage'>
        <img src={'http://localhost:8080'+foto[0].formats.thumbnail.url} alt="" />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {nombre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="text.secondary">
          Precio: {precio}
        </Typography>
        <IconButton aria-label="add to carrito" onClick={handleClick}>
          <AddShoppingCartIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}