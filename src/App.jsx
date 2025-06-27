import React from 'react'
import Navber from './Components/Home/Navber'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='flex flex-col '>
      <Navber />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App