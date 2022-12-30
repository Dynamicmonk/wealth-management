import React from 'react'
import {MainContainer, MemberForm, MemberLabel, MemberH, MemberInput, MemberButton} from '../addMember/StyleAddMember'

function DeleteDetail() {
  return (
    <MainContainer>
      <MemberH>Delete Member Details</MemberH><br />
      <MemberForm action="">
    <MemberLabel htmlFor="firstname">First Name</MemberLabel>
    <MemberInput  id="firstname" name="FirstName" type="text" />
    <MemberLabel htmlFor='email'>E-Mail</MemberLabel>
    <MemberInput id="email" name="email" type="email"/>
    <br />
    
    <MemberButton type='submit'>Delete Detail</MemberButton>
    <MemberButton type='button'>Cancel</MemberButton>

      </MemberForm>
    </MainContainer>
  )
}

export default DeleteDetail