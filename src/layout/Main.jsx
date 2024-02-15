import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'
import LodingSpinner from '../components/LodingSpinner'

const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className='bg-prigmayBG'>
      {loading ? (
        <LodingSpinner/> 
      ): (
        <div>
          <Navbar/>
          <div className="min-h-screen">
          <Outlet/>
          </div>
          <Footer/>
        </div>
        // loading ? <LodingSpinner/> : 
        
      )}
     
    </div>
  );
};

export default Main
