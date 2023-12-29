import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import "../App.css"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default Main
