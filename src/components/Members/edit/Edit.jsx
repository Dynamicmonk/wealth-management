import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getallloading, getallusers, updateMemberApi } from '../../features/users/UserSlice'
import { MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton,Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, MemberFormDiv, SubContainerThree, MemberButton2, SubContainerFor, MemberHH, Bttndiv} from '../StyleMembers'
import {MemberTable} from './StyleEdit'



function Edit() {

  const {id} = useParams();
  const allusersdata=useSelector(getallusers);
  const allloadingdata=useSelector(getallloading);
  const dispatch= useDispatch();


  const[userEdit , setUserEdit] = useState({
    firstname:'',
    lastname:'',
    FullName:'',
    emailaddress1:'',
    phone1:'',
    Password:'',
    contactId:id
  })

  const handleEdit =(e)=>{
    const name = e.target.name;
    const value= e.target.value;
    setUserEdit({...userEdit , [name]:value})

  }

  const handleSubmit=()=>{
    const{firstname , lastname , emailaddress1 , phone1 , contactId , Password} = userEdit
    dispatch(updateMemberApi({Password , firstname , lastname , emailaddress1 , phone1 , contactId})).unwrap().then(res=>console.log(res))
  }
const[ID, setID] = useState(0)

  return (
    <>
    {/* <Bttndiv>
      <MemberButton type='submit'>Edit</MemberButton>
    <MemberButton type='button'>Delete</MemberButton>

    </Bttndiv> */}
    {allloadingdata==='pending'?(<><div className='loader'></div></>)
    : allusersdata.map((postuser, index)=>(<MemberForm action="" id={index} key={postuser.ContactId}> 
        {/* <Para><u>Personal Info</u></Para> */}
        <MemberFormDiv>
          <MemberLabel htmlFor="firstname">First Name</MemberLabel>
    <MemberInput  id="firstname" name="firstname" type="text"  placeholder={postuser.FirstName} value={userEdit.firstname} onChange={handleEdit}/>
    <MemberLabel htmlFor="FullName">Full Name</MemberLabel>
    <MemberInput  id="FullName" name="FullName" type="text" placeholder={postuser.FullName} value={userEdit.FullName} onChange={handleEdit}/><br/>
    <MemberLabel htmlFor='lastname'>Last Name</MemberLabel>
    <MemberInput id="lastname" name="lastname" type="text" placeholder={postuser.LastName} value={userEdit.lastname} onChange={handleEdit}/>
    {/* <MemberLabel htmlFor='age'>Age</MemberLabel>
    <MemberInput tooltip='only number' id="age" name="age" type="number"/>
    <MemberLabel htmlFor='gender'>Gender</MemberLabel>
    <MemberInput id="gender" name="gender" type="text"/><br/>
    <MemberLabel htmlFor='marital'>Marital Status</MemberLabel>
    <MemberInput id="marital" name="marital" type="text" /> */}
    {/* <MemberLabel htmlFor='relation'>Relationship to me</MemberLabel>
    <MemberInput id="relation" name="relation" type="text" value={userEdit.firstname} onChange={handleEdit}/> */}
    {/* </MemberFormDiv> */}
    {/* <Para><u>Document Info</u></Para>
    <MemberFormDiv>
    <MemberLabel htmlFor='pan'>PAN no.</MemberLabel>
    <MemberInput id="pan" name="pan" type="text" />
    <MemberLabel htmlFor='aadhar'>AADHAR No.</MemberLabel>
    <MemberInput id="aadhar" name="aadhar" type="text" />
    </MemberFormDiv> */}
    {/* <Para><u>Contact Info</u></Para> */}
    {/* <MemberFormDiv> */}
    <MemberLabel htmlFor='mobile'>Mobile No.</MemberLabel>
    <MemberInput id="mobile" name="phone1" type="number" placeholder={postuser.Phone1} value={userEdit.phone1} onChange={handleEdit}/>
    <MemberLabel htmlFor='mail'>E-Mail</MemberLabel>
    <MemberInput id="mail" name="emailaddress1" type="email" placeholder={postuser.Email} value={userEdit.emailaddress1} onChange={handleEdit}/>
    <MemberLabel htmlFor='Password'>Password</MemberLabel>
    <MemberInput id="mail" name="Password" type="text" placeholder={postuser.Password} value={userEdit.Password} onChange={handleEdit}/>
    </MemberFormDiv>
    <Bttndiv>
      <MemberButton type='button' onClick={handleSubmit}>Update</MemberButton>
    <MemberButton type='button'>Delete</MemberButton>

    </Bttndiv>
          </MemberForm>
        ))}
      
    </>
  )
}

export default Edit;