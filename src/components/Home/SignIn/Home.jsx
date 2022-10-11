import React, {useEffect, useState} from 'react';
import { NavLink, Link , useNavigate } from 'react-router-dom';
import { FaGoogle , FaTwitter , FaFacebookF } from 'react-icons/fa';
import axios from 'axios';
import { Container, Anchorr, DivBttn, FormFeed, HeaderText, SpanBttn, SubContainer, HomeInput, InnerDiv, SignInBttn, IconSpan } from './StyleHome';
import './Stylehome.css'

const Home = () => {
  const navigate=useNavigate();
  const [userInfo, setUserInfo] = useState({
    email:'',
    mobile:'',
    password:''
  })
   
  const handleChange=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      console.log(name,value)
      setUserInfo({...userInfo, [name]:value})
    }

  const handleLogin= async (e)=>{
    e.preventDefault();
    const{email,mobile,password} = userInfo;
    if(validation()){
      
      await axios.post("'https://prod-08.centralindia.logic.azure.com:443/workflows/ea19ec5e8340406094ef030606005b0f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5tA9pANXmADvQMILl2c_lLF5Ll2FOtpJLxTw7OOD5XM", {mobile, password , email}).then(res=>
      {
        console.log(res.data)
        if(res.status === 200 && (res.Contact_Guid !==null)){
          localStorage.setItem( 'userDeatils : ', JSON.stringify(res.data) )
          navigate('/privateComponent')
        }
      })  
    }
  }

  const validation = () => {
    const{email,mobile,password} = userInfo;
    if(email==='')
    {
      alert('please enter email id')
    }
    else if(!email.includes('@'))
    {
      alert('please enter valid email id with @ symbol')
    }
    else if(password==='')
    {
      alert('please select a password')
    }
    
    else if (mobile==='')
    {
      alert('you must enter mobile no.')
    }

    if(email === '' || password === '' || mobile === ''){
      return false;
    }
    else{
      return true;
    }
  }

            
  return (
    <Container>
        <InnerDiv>
            <img alt='myName' src="	https://www.photocase.com/photos/3581447-abstract-…n-bright-colours-photocase-stock-photo-large.jpeg"/>
            <h1>Wealth Managment  App</h1>
            <p>"a budget is telling your money where to go instead of wondering where it went "</p>
        </InnerDiv>
        <SubContainer>
            <FormFeed action="" onSubmit={handleLogin}>
                <HeaderText>Sign In</HeaderText>
    <HomeInput type='text' name='email'
    value={userInfo.username}
    onChange={handleChange}
    placeholder='Email-ID'>
    </HomeInput>
    <br />

    <HomeInput type='text' name='mobile'
    value={userInfo.mobile}
    onChange={handleChange}
    placeholder='Mobile No.' >
    </HomeInput>
    <br />

    
    <HomeInput name='password'
    value={userInfo.password}
    onChange={handleChange}
    autoComplete='off' type='password' placeholder='Password' >
    </HomeInput>
    <br />
    
    <SpanBttn>
        <input type='checkbox'/>&nbsp;<p>Remeber me</p>
    </SpanBttn>
    <DivBttn>
<SignInBttn type='submit'>Continue &#10132;</SignInBttn><br />

<IconSpan> Sign in using
  <FaFacebookF className='set-size'/> 
  <FaTwitter className='set-size'/>
  <FaGoogle className='set-size'/>
</IconSpan>
<IconSpan>
<Anchorr onClick={()=>navigate("/signup")}>
     Click here if you  don't have an account
</Anchorr>
</IconSpan>

            </DivBttn>
        </FormFeed>
    </SubContainer>
</Container>

  )
}

export default Home