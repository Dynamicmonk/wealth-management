import React, {useEffect, useState} from 'react';
import { NavLink, Link , useNavigate } from 'react-router-dom';
import { FaGoogle , FaTwitter , FaFacebookF } from 'react-icons/fa';
import axios from 'axios';
import { Container, Anchorr, DivBttn, FormFeed, HeaderText, SpanBttn, SubContainer, HomeInput, InnerDiv, SignInBttn, IconSpan } from './StyleSignUp';
import '../SignIn/Stylehome.css'

const SignUp = () => {
    // const dispatch=useDispatch();
    const navigate=useNavigate();
    const [userInfo, setUserInfo] = useState({
      firstName:'',
      lastName:'',
      email:'',
      mobile:'',
      password:'',
      userId:''
  
    })
     
      const handleSubmit=(e)=>{
        
        const name=e.target.name;
        const value=e.target.value;   
        setUserInfo({...userInfo, [name]:value})
        
      }
  const [record, setRecords] = useState([])
      const handleInput=(e)=>{
        e.preventDefault();
        const{firstName,lastName,email,mobile,password,userId} = userInfo;
        if(firstName==='')
        {
          alert('please enter First Name')
        }
        else if(lastName===''){
          alert('please enter last Name')
        }
        else if(email==='')
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
        else if(password.length<8)
        {
          alert('password lengt  must be more than 8 characters')
        }
        else if (userId==='')
        {
          alert('you must enter a userId')
        }
        else if (mobile==='')
        {
          alert('you must enter mobile no.')
        }
        
        else {
          axios.post('https://prod-08.centralindia.logic.azure.com:443/workflows/f38d19a35be44d76b272252594ceeffa/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UOmOaOcc9kiqYDsx8hIBjKaspOYoqsYPCMz1sJOR6os', userInfo).then(res=>{
            if(res.status===200){
              alert('User added successfully');
              localStorage.setItem('userDeatils : ' , JSON.stringify(res.data.contactid))
              setUserInfo({...userInfo, firstName:'', lastName:'', email:'', mobile:'', userId:'', password:''})
              navigate('/pc')
            }
        })
          .catch(err=>alert(err))
        }
      }
  
      useEffect(()=>{
        if(localStorage.getItem('userDetails : '))
        {
          navigate('/pc')
        }
      },[])          
  return (
    <Container>
        <InnerDiv>
            <img alt='myName' 
            src="	https://www.photocase.com/photos/3581447-abstract-…n-bright-colours-photocase-stock-photo-large.jpeg"
            />
            <h1>Wealth Managment  App</h1>
            <p>"a budget is telling your money where to go instead of wondering where it went "</p>
        </InnerDiv>
        <SubContainer>
            <FormFeed action="" onSubmit={handleInput}>
                <HeaderText>Create an Account</HeaderText>
    
    
                <HomeInput type='text' 
    value={userInfo.firstName}
    onChange={handleSubmit}
    name='firstName' placeholder='First Name'></HomeInput><br />
    <HomeInput type='text' 
    value={userInfo.lastName}
    onChange={handleSubmit}
    name='lastName' placeholder='Last Name'></HomeInput><br />
    
    <HomeInput type='text' 
    value={userInfo.email}
    onChange={handleSubmit}
    name='email' placeholder='Email Id' >
    </HomeInput><br />
    
    <HomeInput type='text' 
    value={userInfo.mobile}
    onChange={handleSubmit}
    name='mobile' placeholder='Mobile No.' >
    </HomeInput><br />
    
    <HomeInput 
    value={userInfo.password}
    onChange={handleSubmit}
    name='password' autoComplete='off' type='password' placeholder='Password' >
    </HomeInput><br />

    <HomeInput 
    value={userInfo.userId}
    onChange={handleSubmit}
    name='userId' autoComplete='off' type='password' placeholder='User ID' >
    </HomeInput><br />
    
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
<Anchorr onClick={()=>navigate("/")}>
     Click here to go back & sign-in.
</Anchorr>
</IconSpan>

            </DivBttn>
        </FormFeed>
    </SubContainer>
</Container>

  )
}

export default SignUp