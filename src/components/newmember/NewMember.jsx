// import  {MemberForm, MemberLabel, MemberH, MemberInput, MemberButton, MemberFormDiv, Para, Bttndiv ,
//   } from './StyleNewMember' 
  import { MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton,Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, MemberFormDiv, SubContainerThree, MemberButton2, SubContainerFor, MemberHH, Bttndiv, TargetContainer} from './StyleNewMember'
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import Income from '../Income/Income';
import Members from '../Members/Members';
import AddIncome from '../Members/form/AddIncome';
import PersonalMember from '../PersonalMember/PersonalMember';
import FixedIncome from '../Income/fixedIncome/FixedIncome';
import Expense from '../Expense/Expense';
import Investment from '../Investment/Investment';
import AddGeneralInfo from '../Members/AddGeneralInfo';
import AddInvestment from '../Members/form/AddInvestment';
import AddExpense from '../Members/form/AddExpense';
import './StyleNewMember.css'


function NewMember() {

  const navigate=useNavigate();

  const [loadPage, setLoadPage] = useState('form')
const [active, setActive] = useState('general')
  // const[disp,setDisp]= useState(true)
  const [disabledIsOpen, setDisabledIsOpen]= useState(false)
  const getData=(data)=>{
    console.log(data)
    setDisabledIsOpen(disabledIsOpen)
  }
  
  return (
    <>
        <MainContainer>
  <SubContainerThree >
        <MemberButton2  onClick={()=>setActive('general')}>General</MemberButton2>
        <MemberButton2 className='disabled-bttn' disabled={false} onClick={()=>setActive('income')}>Income</MemberButton2>
        <MemberButton2 className='disabled-bttn' disabled={false} onClick={()=>setActive('invest')}>Investment</MemberButton2>
        <MemberButton2 className='disabled-bttn' disabled={false} onClick={()=>setActive('expense')}>Expense</MemberButton2>
      </SubContainerThree>
      <TargetContainer>
      {active==='general' && <AddGeneralInfo/>}
      {active==='income' && <AddIncome/>}
      {active==='invest' && <AddInvestment/>}
      {active==='expense' && <AddExpense/>}

      </TargetContainer>

     </MainContainer>



    {/* {disp && (<MemberForm action=""> 
        {loadPage==='addincome' && <AddIncome/>}
    {loadPage==='members' && <Members/>}
    {loadPage==='form' && (<>  <Para>Personal Info</Para>
    <MemberFormDiv>
        <MemberLabel htmlFor="firstname">First Name</MemberLabel>
     <MemberInput  id="firstname" name="FirstName" type="text" placeholder='Komal'/>
         <MemberLabel htmlFor='lastname'>Last Name</MemberLabel>
    <MemberInput id="lastname" name="LastName" type="text"/>
     <br/>
    <MemberLabel htmlFor='age'>Age</MemberLabel>
     <MemberInput tooltip='only number' id="age" name="age" type="number"/>
     <MemberLabel htmlFor='gender'>Gender</MemberLabel>
     <MemberInput id="gender" name="gender" type="text"/><br/>
     <MemberLabel htmlFor='marital'>Marital Status</MemberLabel>
     <MemberInput id="marital" name="marital" type="text" />
     <MemberLabel htmlFor='relation'>Relationship to me</MemberLabel>
     <MemberInput id="relation" name="relation" type="text" />
     </MemberFormDiv><br/>
     <Para>Document Info</Para>
    <MemberFormDiv>
    <MemberLabel htmlFor='pan'>PAN no.</MemberLabel>
    <MemberInput id="pan" name="pan" type="text" />
    <MemberLabel htmlFor='aadhar'>AADHAR No.</MemberLabel>
    <MemberInput id="aadhar" name="aadhar" type="text" />
    </MemberFormDiv>
    <Para>Contact Info</Para>
    <MemberFormDiv>
    <MemberLabel htmlFor='mobile'>Mobile No.</MemberLabel>
    <MemberInput id="mobile" name="mobile" type="number" />
     <MemberLabel htmlFor='mail'>E-Mail</MemberLabel>
     <MemberInput id="mail" name="mail" type="email" />
     </MemberFormDiv></>)}
     
     <Bttndiv>
       <MemberButton type='button' onClick={()=>setLoadPage('addincome')}>Next</MemberButton>
    <MemberButton type='button' onClick={()=>setDisp(!disp)}>Back</MemberButton>

    </Bttndiv>
    

      </MemberForm>)} */}
    </>

  )
}

export default NewMember