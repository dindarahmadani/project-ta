import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/dashboard/Home';

function Indexroutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Indexroutes