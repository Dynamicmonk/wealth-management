import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import TopBar from '../TopBar/TopBar'
import { Container } from './StylePrivateComponent'
import Dashboard from '../Dashboard/Dashboard'
import Report from '../Reports/Report'
import Finance from '../Finances/Finance'
import Document from '../Documents/Document'
import Members from '../Members/Members'

function PrivateComponent() {
  return (
    <>
    <TopBar/>
    {/* <Container> */}
    <SideBar>
      <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/report' element={<Report/>} />
        <Route path='/finance' element={<Finance/>} />
        <Route path='/members' element={<Members/>} />
        <Route path='/documents' element={<Document/>} />
        </Routes>
    </SideBar>
    {/* <Outlet/> */}
    {/* </Container> */}
    
    
    </>
  )
}

export default PrivateComponent