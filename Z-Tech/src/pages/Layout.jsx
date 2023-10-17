import React from 'react'
import IndexPage from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <IndexPage></IndexPage>
      <Outlet></Outlet>
    </div>
  )
}
