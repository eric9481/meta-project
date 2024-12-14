import React from 'react'
import Homepage from './Homepage'
import BookingPage from './BookingPage'
import Missing from './Missing'
import { Route, Routes } from 'react-router-dom'


const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menu' element={<Missing />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/order' element={<Missing />} />
        <Route path='/login' element={<Missing/>} /> 
      </Routes>
    </>


  )
}

export default Main