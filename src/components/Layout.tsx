import { Outlet } from 'react-router-dom'
import Navbar from './ui/Navbar'
// import { useRef } from 'react'

const Layout = () => {
  
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout