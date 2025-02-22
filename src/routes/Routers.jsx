import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Service from '../pages/Service'

const Routers = () => {
  return (
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/home" element={ <Home /> } />
 
    <Route path="/doctors" element={ <Doctors /> } />
    <Route path="/doctors/:id" element={ <DoctorDetails /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/register" element={ <SignUp /> } />
    <Route path="/contact" element={ <Contact /> } />
    <Route path="/service" element={ <Service /> } />
 
    
    </Routes>
  )
}

export default Routers