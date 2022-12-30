import React from 'react'
import { Outlet } from 'react-router-dom'
import '../Documents/StyleDocument'
import { Btton, ContainerD , InputDoc } from '../Documents/StyleDocument'

function Document() {
  return (
    <div><Outlet/></div>
  )
}

export default Document