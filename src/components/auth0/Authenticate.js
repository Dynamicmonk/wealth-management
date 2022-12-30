import React from 'react'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
import './StyleAuthenticate.css'
import NavbarContainer from '../../pages/NavbarContainer'
import { Outlet } from 'react-router-dom'

function Authenticate() {
  return (
    <>
    <div className='auth-container'>
      <div className='auth-navbar'>
        <TopBar/>
      </div>
      <div className='auth-body'>
        {/* <div className='auth-sidebar'> */}
          <SideBar/>
        </div>
        {/* <div className='auth-outlet'>
          <Outlet/>
          </div> */}
      {/* </div> */}
    </div>
    {/* <TopBar/>
    <SideBar/> */}
      
    </>
  )
}

export default Authenticate
