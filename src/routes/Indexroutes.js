import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/dashboard/Home';
import UserProduct from '../pages/dashboard/user/UserProduct';

function Indexroutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/userproduct' element={<UserProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Indexroutes