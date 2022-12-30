import React, { useEffect } from 'react'
import { FaClipboardCheck , FaSearch ,FaTwitter , FaArrowCircleRight , FaUser } from 'react-icons/fa'
import {Container , InputBar, Logo} from './StyleTopBar'
import '../TopBar/StyleTopBar.css'
import DM from '../../assets/images/DM.png'
import { Navigate, useNavigate } from 'react-router-dom'
// import { logout } from '../features/signin/authReducer'
import { useDispatch , useSelector } from 'react-redux'
import {logout} from '../features/logup/logupReducer'
import { getuser, ReqstId } from '../features/signin/auth'
import StyleprivateComponent from '../PrivateComponent/StyleprivateComponent.css'
import { allusersreceived, fetchUserById, getallusers, userByid } from '../features/users/UserSlice'



const TopBar=()=>{
  // const getUserDetaile = useSelector(getuser)
  // console.log(getUserDetaile)

  const navigate=useNavigate();
 const uid = ReqstId 
const dispatch=useDispatch()
useEffect(()=>{
let payload = {
  id: uid
}
dispatch(fetchUserById(payload)).unwrap().then(res=>{
  // console.log("user Details : " );
  // //  userName = res.FirstName;
   console.log(res);
   console.log("Hello")
  
  
})
},[]);
  const users = useSelector(userByid)
//  const userdetails = useSelector(userByid);
//  debugger;
// const user = userdetails.FirstName;
//  console.log("Name is : "+users.FullName)
//  console.log(users)
//  var userName;
  
const logout=()=>{
    dispatch(logout)
    navigate('/')
  }
      return(
        <>
        <Container>
        
          <img src={DM} alt="" className='top-img -col-12s'/>
          {/* {users.map((index)=>
          <p style={{fontSize:'12px', marginRight:'20px'}}>
            Hello {index.FullName}
          </p>
          )} */}
          <InputBar placeholder='Search.....'/>
          <FaSearch className='margin-set col-set'/>
      <FaClipboardCheck className='margin-set'/>
            <FaTwitter className='margin-set'/>
            <FaUser className='margin-set'/>
            {/* {getUserDetaile.map((state,index)=><p key={index}>{state.RequestId}</p>)} */}
            
            <FaArrowCircleRight title='Logout' className='margin-set' onClick={logout}/>
    </Container>
    </>
      )
    }

    export default TopBar
  