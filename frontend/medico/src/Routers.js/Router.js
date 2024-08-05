import React from 'react'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Services from '../Pages/Services'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'

export default function Router() {
  return (
   <Router>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/services' element={<Services/>}/>
        <Route exact path='/signup' element={<SignUp/>}/>
        <Route exact path='/login' element={<Login/>}/>
    </Routes>

   </Router>
    
  )
}
