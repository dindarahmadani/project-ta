import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/dashboard/Home';
import IndexProduct from '../pages/dashboard/user/product/IndexProduct';

function Indexroutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/userproduct' element={<IndexProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Indexroutes