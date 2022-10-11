import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
import { Container } from './StylePrivateComponent'

function PrivateComponent() {
  return (
    <>
    <TopBar/>
    <Container>
    <SideBar/>
    <Outlet/>
    </Container>
    
    
    </>
  )
}

export default PrivateComponent