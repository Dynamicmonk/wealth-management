import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate,  } from 'react-router-dom';
import { createNewMemberApi } from '../../features/users/UserSlice';
import { MemberButton, MemberForm, MemberFormDiv, MemberInput, MemberLabel, Para } from '../../PersonalMember/StylePersonal';
import './StyleAddNewMember.css'
import { ReqstId } from '../../features/signin/auth';
import MemberCreatedMsg from '../../PersonalMember/MemberCreatedMsg';
import { GlobalInfo } from '../Members';


export var relationship;
function AddNewMember({formData, setFormData , handleOnChange}) {
  const userId = ReqstId;
  
  const { MembercompData , getMemberDetails } = useContext(GlobalInfo)

  const handleChange=(e)=>{ 
    debugger;
    setFormData({...formData , relationshipType:e.target.value})
    relationship=e.target.value;
    
   }

  const dispatch = useDispatch();
  // const userId= "c9b5f1a8-fe3a-ed11-9db0-6045bdad1ab7";
  const navigate= useNavigate()

    // const [userInfo, setUserInfo] = useState(
    //     {
    //       FirstName     :'MorningStar',
    //       LastName      :'Star',
    //       Email :'lucifer@gmail.com',
    //       Phone1        :'123000000',
    //       ContactPersone: userId,
    //       IsNewSignup   :"true"
    //   })
    // const [userInfo, setUserInfo] = useState(
    //   {
    //     FirstName           :'',
    //     LastName            :'',
    //     Email               :'',
    //     Phone1              :'',
    //     Password            :'',
    //     PrimaryMemberId     : userId,
    //     IsNewSignup         :true,
    //     contactRelationship :
    //       {
    //       RelationshipType  : relationshipType
    //   }

    // }
    //  )

      //  const handleSubmit=(e)=>{   
      //   const name=e.target.name;
      //   const value=e.target.value;   
      //   setUserInfo({...userInfo, [name]:value})
      //  }
       
      // const handleInput=(e)=>{
      //   e.preventDefault(); 
      //   if(userInfo.FirstName.length<8){
      //     alert("Plz enter more than 7 characters ")
      //   }
      //   else{
      //     console.log(userInfo)
      //     dispatch(createNewMemberApi(userInfo)).unwrap().then((res)=>{
      //       // debugger;
      //       console.log(res)
      //       console.log(res.RequestId);
      //       newMemberId=res.RequestId;
           
      //       // setEnableBttn(enableBttn.expense(false))
      //       setUserInfo({...userInfo, FirstName:'', LastName:'', Email:'', Phone1:'', Password:''}) 
      //       // navigate('members')
      //       // alert('Member created succesfully !');
      //       // navigate('viewdoc')
            
      //     }).catch(err=>console.log(err.response.error))
          
      //   }}

       var newMemberId;

      // const validation = () => {
      //   const{FirstName} = userInfo;
      //   if(FirstName.length<8)
      //   {
      //     alert('please enter First Name more than 7 characters')
      //     setUserInfo(userInfo.FirstName==='')
      //   }     
        
      //   else {
      //     console.log("Plz check for error")
      //   }
      // }

    return (
       <>
       {/* <MemberFormDiv>
        {/* <Para className='add-para'>Add New Member</Para> */}
       {/* <MemberForm className='add-form' >
        <MemberLabel className='add-label' htmlFor='FirstName'>First Name</MemberLabel>
        <MemberInput className='add-input' type='text' name='FirstName' value={formData.FirstName} onChange={(e)=>setFormData({...formData , FirstName:e.target.value})} /><br/>
        <MemberLabel className='add-label' htmlFor='LastName'>Last Name</MemberLabel>
        <MemberInput className='add-input' type='text' name='LastName' value={formData.LastName} onChange={(e)=>setFormData({...formData , LastName:e.target.value})} /><br/> */}
        {/* <label htmlFor='age'>Age</label>
        <MemberInput name='age' value={userInfo.age} onChange={handleSubmit}/><br/> */}
        {/* <MemberLabel className='add-label' htmlFor='Phone1'>Mobile Number</MemberLabel>
        <MemberInput className='add-input' type='text' name='Phone1' value={formData.Phone1} onChange={(e)=>setFormData({...formData , Phone1:e.target.value})}/><br/>
        <MemberLabel htmlFor='RelationshipType' className='add-label'>Relationship</MemberLabel>
        <select className='add-input' name='contactRelationship.RelationshipType'
         onChange={e=>{
          debugger;
          setRelate(relate=e.target.value)
          setFormData({...formData ,RelationshipType:e.target.value})}}>
          <option value='930650000'>Father</option>
          <option value='930650001'>Mother</option>
          <option value='930650004'>Spouse</option>
          <option value='930650003'>Sister</option>
          <option value='930650002'>Brother</option>
          <option value='930650006'>Daughter</option>
          <option value='930650005'>Son</option>
          <option value='930650007'>Aunt</option>
          <option value='930650008'>Uncle</option>
        </select><br/> */}
        {/* <MemberInput name='Relationship' value={userInfo.Relationship} onChange={handleSubmit}/><br/> */}
        {/* <MemberLabel className='add-label' htmlFor='Email'>Email</MemberLabel>
        <MemberInput className='add-input' name='Email' value={formData.Email} onChange={(e)=>setFormData({...formData , Email:e.target.value})}/><br/>
        <MemberLabel htmlFor='Password'>Password</MemberLabel>
        <MemberInput name='Password' value={formData.Password} onChange={(e)=>setFormData({...formData , Password:e.target.value})}/><br/> */}
        {/* <MemberButton type='submit' onClick={handleInput}>Submit</MemberButton> */}
        {/* <MemberButton type='button' onClick={getMemberDetails(userInfo)}>Save</MemberButton> */}
       {/* </MemberForm> */}
       {/* </MemberFormDiv> */}

       {/* ************************************************************************ */}

       <MemberFormDiv>
        {/* <Para className='add-para'>Add New Member</Para> */}
       <MemberForm className='add-form' >
        <MemberLabel className='add-label' htmlFor='FirstName'>First Name</MemberLabel>
        <MemberInput className='add-input' type='text' name='FirstName'  onChange={handleOnChange}/><br/>
        <MemberLabel className='add-label' htmlFor='LastName'>Last Name</MemberLabel>
        <MemberInput className='add-input' type='text' name='LastName'  onChange={handleOnChange}/><br/>
        {/* <label htmlFor='age'>Age</label>
        <MemberInput name='age' value={userInfo.age} onChange={handleSubmit}/><br/> */}
        <MemberLabel className='add-label' htmlFor='Phone1'>Mobile Number</MemberLabel>
        <MemberInput className='add-input' type='text' name='Phone1' onChange={handleOnChange}/><br/>
        <MemberLabel htmlFor='RelationshipType' className='add-label'>Relationship</MemberLabel>
        <select className='add-input' name='contactRelationship.RelationshipType'
         onChange={(e)=>{
          setFormData({...formData , contactRelationship:{RelationshipType:e.target.value}});
          }}>
          <option value='930650000'>Father</option>
          <option value='930650001'>Mother</option>
          <option value='930650004'>Spouse</option>
          <option value='930650003'>Sister</option>
          <option value='930650002'>Brother</option>
          <option value='930650006'>Daughter</option>
          <option value='930650005'>Son</option>
          <option value='930650007'>Aunt</option>
          <option value='930650008'>Uncle</option>
        </select><br/>
        {/* <MemberInput name='Relationship' value={userInfo.Relationship} onChange={handleSubmit}/><br/> */}
        <MemberLabel className='add-label' htmlFor='Email'>Email</MemberLabel>
        <MemberInput className='add-input' name='Email' onChange={handleOnChange}/><br/>
        <MemberLabel htmlFor='Password'>Password</MemberLabel>
        <MemberInput name='Password' onChange={handleOnChange}/><br/>
        {/* <MemberButton type='submit' onClick={handleInput}>Submit</MemberButton> */}
        {/* <MemberButton type='button' onClick={getMemberDetails(userInfo)}>Save</MemberButton> */}
       </MemberForm>
       </MemberFormDiv>

       
       </> 
    )
}

export default AddNewMember;
