import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../container/Home'
import Carrito from '../container/Carrito'
import Productos from '../container/Productos'
import Error404 from '../container/Error404'
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/carrito' element={<Carrito />}></Route>
          <Route path='/productos' element={<Productos />}></Route>
          <Route path='' element={<Error404 />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
