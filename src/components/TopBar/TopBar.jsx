import React from 'react'
import { FaClipboardCheck , FaSearch ,FaTwitter , FaArrowCircleRight , FaUser } from 'react-icons/fa'
import {Container , InputBar, Logo} from './StyleTopBar'
import '../TopBar/StyleTopBar.css'
import DM from '../../assets/images/DM.png'

const TopBar=()=>{
      return(
        <Container>
          <img src={DM} alt="" className='top-img'/>
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
  