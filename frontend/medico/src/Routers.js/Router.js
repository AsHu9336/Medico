import React from 'react'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

import { Route, Routes } from 'react-router-dom'
import Services from '../Pages/Services'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Doctors from '../Pages/Doctor/Doctors'
import DoctorsDetails from '../Pages/Doctor/DoctorsDetails'


export default function routers() {
  return (
  
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/doctors' element={<Doctors/>}/>
        <Route exact path='/doctors/:id' element={<DoctorsDetails/>}/>
    </Routes>

  
    
  )
}
