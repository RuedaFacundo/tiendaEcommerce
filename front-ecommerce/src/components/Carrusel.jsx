import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../Statics/css/Carrusel.css'

export default function Carrusel() {
return (
	<div style={{ display: 'block' }} className='ancho'>
	<Carousel>
		<Carousel.Item interval={1500}>
      <img
        className="d-block w-100"
        src="https://http2.mlstatic.com/D_NQ_951840-MLA50929759526_072022-OO.webp"
        alt="Oferta 1"
      />
		</Carousel.Item>
		<Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://http2.mlstatic.com/D_NQ_730597-MLA50899717756_072022-OO.webp"
        alt="Oferta 2"
      />
		</Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://http2.mlstatic.com/D_NQ_676173-MLA50899923109_072022-OO.webp"
        alt="Oferta 3"
      />
		</Carousel.Item>
	</Carousel>
	</div>
);
}
