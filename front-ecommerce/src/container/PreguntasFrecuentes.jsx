import React from 'react'
import Pregunta from '../components/Pregunta'
import '../Statics/css/PreguntasFrecuentes.css'

const PreguntasFrecuentes = () => {
  return (
    <div className='preguntas-contenedor'>
      <h1>Preguntas Frecuentes</h1>
      <ul>
        <li>
          <Pregunta 
            pregunta='¿Cuáles son los días y horarios de atención?'
            respuesta='Nuestro horario de atención al cliente es de lunes a viernes de 9 a 18hs. Podés contactarnos por WhatsApp al +54 223 3423-4534 o vía email a consultas@gmail.com.ar'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Hacen envíos a todo el país?'
            respuesta='Sí, realizamos envíos a toda la Argentina.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Hacen envíos Express a CABA y GBA?'
            respuesta='Sí. Dependiendo del producto, se realiza la entrega en el día o dentro de las 24hs hábiles.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Puedo retirar el producto personalmente?'
            respuesta=' Si, los productos pueden ser retirados por nuestro punto de entrega en Mar del Plata.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Cuáles son los medios de pago?'
            respuesta='Podrás abonar tu compra a través de tarjetas de crédito o tarjetas de débito bancarias, Mercado Pago o Transferencia Bancaria. Además, podes acceder al “simulador de cuotas” desde la página del producto para conocer las promociones bancarias vigentes.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Realizan Factura A?'
            respuesta='Si, podrás solicitarla al momento de cargar la orden tildando la opción de Factura A.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Los productos tienen garantía?'
            respuesta='Sí, todos nuestros productos cuentan con la garantía oficial de las marcas.'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Hacen ventas por mayor?'
            respuesta='Para ventas al por mayor, por favor enviar la solicitud al correo ventas@gmail.com.ar'
          ></Pregunta>
        </li>
        <li>
          <Pregunta 
            pregunta='¿Cómo autorizo a alguien para que reciba mi compra?'
            respuesta='En el momento de realizar la compra, podrás elegir a la persona autorizada para recibir el pedido.'
          ></Pregunta>
        </li>
      </ul>
    </div>
  )
}

export default PreguntasFrecuentes
