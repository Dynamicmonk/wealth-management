import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import AddExpense from './form/AddExpense';
import AddIncome from './form/AddIncome';
import AddInvestment from './form/AddInvestment';
import {MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton,Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, MemberFormDiv, SubContainerThree, MemberButton2, SubContainerFor, MemberHH, Bttndiv, TargetContainer} from './StyleAddGeneralInfo';
import { createNewMemberApi} from '../features/users/UserSlice'
function AddGeneralInfo( props) {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const[disp,setDisp]= useState()
  const [formData, setFormData] = useState({
    FirstName:'',
    LastName:'',
    Age:'',
    MaritalStatus:'',
    Gender:'',
    Relationship:'',
    Pan:'',
    Aadhar:'',
    MobileNumber:'',
    Email:''
  })

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    // console.log(name,value)
    setFormData({... formData, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // const newRecord= {...formData , id:new Date().getTime().toString()};
    // console.log(newRecord)
    // console.log(props.save)
    dispatch(createNewMemberApi(formData)).unwrap().then(()=>{
      navigate('members')
    })
    
  }
const[next,setnext]=useState()
  const nextbttn=()=>{
    if(bttnEnabled)
    {
      setnext('addincome')
    }
  }

  const bttnEnabled=
    formData.FirstName>0 && formData.LastName>0 && formData.Aadhar>0 && formData.Pan>0 && formData.Email>0 && formData.MobileNumber>0 && formData.Gender>0 && formData.MaritalStatus>0
  ;
const[my,setMy]=useState('newmember')
  return (
    <>
    <MemberFormDiv>
        <MemberLabel htmlFor="FirstName">First Name</MemberLabel>
     <MemberInput  id="FirstName" name="FirstName" type="text" placeholder='Komal' onChange={handleInput} value={formData.FirstName}/>
         <MemberLabel htmlFor='LastName'>Last Name</MemberLabel>
    <MemberInput id="LastName" name="LastName" type="text" onChange={handleInput} value={formData.LastName}/>
     <br/>
    <MemberLabel htmlFor='Age'>Age</MemberLabel>
     <MemberInput tooltip='only number' id="Age" name="Age" type="number" onChange={handleInput} value={formData.Age}/>
     <MemberLabel htmlFor='Gender'>Gender</MemberLabel>
     <MemberInput id="Gender" name="Gender" type="text" onChange={handleInput} value={formData.Gender}/><br/>
     <MemberLabel htmlFor='MaritalStatus'>Marital Status</MemberLabel>
     <MemberInput id="MaritalStatus" name="MaritalStatus" type="text" onChange={handleInput} value={formData.MaritalStatus} />
     <MemberLabel htmlFor='Relation'>Relationship to me</MemberLabel>
     <MemberInput id="Relation" name="Relation" type="text" onChange={handleInput} value={formData.Relation} />
     </MemberFormDiv><br/>
     <Para>Document Info</Para>
    <MemberFormDiv>
    <MemberLabel htmlFor='Pan'>PAN no.</MemberLabel>
    <MemberInput id="Pan" name="Pan" type="text" onChange={handleInput} value={formData.Pan} />
    <MemberLabel htmlFor='Aadhar'>AADHAR No.</MemberLabel>
    <MemberInput id="Aadhar" name="Aadhar" type="text" onChange={handleInput} value={formData.Aadhar} />
    </MemberFormDiv>
    <Para>Contact Info</Para>
    <MemberFormDiv>
    <MemberLabel htmlFor='Mobile'>Mobile No.</MemberLabel>
    <MemberInput id="Mobile" name="Mobile" type="number" onChange={handleInput} value={formData.Mobile}/>
     <MemberLabel htmlFor='Email'>E-Mail</MemberLabel>
     <MemberInput id="Email" name="Email" type="email" onChange={handleInput} value={formData.Email} />
     </MemberFormDiv>
    <MemberButton type='button' onClick={handleSubmit}>Save</MemberButton>
   {/* <MemberButton type='button' onClick={()=>setnext()} >Next</MemberButton> */}
    {/* <AddIncome/>
    <AddInvestment/>
    <AddExpense/> */}

    </>
  )
}

export default AddGeneralInfo