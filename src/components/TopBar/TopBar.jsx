import React from 'react'
import { FaClipboardCheck , FaSearch ,FaTwitter , FaArrowCircleRight , FaUser } from 'react-icons/fa'
import {Container , InputBar, Para} from './StyleTopBar'
import '../TopBar/StyleTopBar.css'

const TopBar=()=>{
      return(
        <Container>
          <InputBar placeholder='Search.....'/>
          <FaSearch className='margin-set col-set'/>
      <FaClipboardCheck className='margin-set'/>
            <FaTwitter className='margin-set'/>
            <FaUser className='margin-set'/>
            <FaArrowCircleRight className='margin-set'/>
    </Container>
      )
    }

    export default TopBar
  