import React,{useState} from 'react'
import  { TargetContainer } from './StyleAddMember'
import { MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton,Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, MemberFormDiv, SubContainerThree, MemberButton2, SubContainerFor, MemberHH, Bttndiv} from '../StyleMembers'
import FixedIncome from '../../Income/fixedIncome/FixedIncome';
import {Link, useNavigate} from 'react-router-dom'
import Edit from '../edit/Edit';
import Investment from '../../Investment/Investment';
import Expense from '../../Expense/Expense';
import PersonalMember from '../../PersonalMember/PersonalMember';


function AddMember() {
  
const[active,setActive]=useState('general')

  return (
    <MainContainer>
  <SubContainerThree >
        <MemberButton2 onClick={()=>setActive('general')}>General</MemberButton2>
        <MemberButton2 onClick={()=>setActive('income')}>Income</MemberButton2>
        <MemberButton2 onClick={()=>setActive('invest')}>Investment</MemberButton2>
        <MemberButton2 onClick={()=>setActive('expense')}>Expense</MemberButton2>
      </SubContainerThree>
      <TargetContainer>
      {active==='general' && <PersonalMember/>}
      {active==='income' && <FixedIncome/>}
      {active==='invest' && <Investment/>}
      {active==='expense' && <Expense/>}

      </TargetContainer>

     </MainContainer>
  )
}

export default AddMember