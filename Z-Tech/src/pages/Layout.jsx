import React from 'react'
import IndexPage from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}
