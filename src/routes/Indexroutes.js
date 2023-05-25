import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/dashboard/Home';
import ProductIndex from '../pages/user/ProductIndex';

function Indexroutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/userproduct' element={<ProductIndex/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Indexroutes