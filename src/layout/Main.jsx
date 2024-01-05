import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import "../App.css"
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
