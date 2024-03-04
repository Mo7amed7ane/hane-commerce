import React from 'react'
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';



export default function Layout() {
  return (
   <div className="parent">
   
    <Navbar />
 <div className="container py-4">  
 <Outlet />
 </div>
< Footer/>
    
   </div>
  )
}
