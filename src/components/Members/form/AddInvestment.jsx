import React from 'react'
import {MemberForm, MemberLabel, MemberInput, MemberButton, MemberHThree, MemberSelect} from '../../Investment/StyleAddInvestment'


function AddInvestment({formData , setFormData}) {
  return (
    <>
    <MemberForm action="">
    <MemberLabel htmlFor="invest">Type</MemberLabel>
    <MemberSelect name='invest' onChange={(e)=>{setFormData({...formData , InvestmentType:e.target.value})}}>
    <option value='930650000'>Fixed</option>
      <option value='930650001'>Variable</option>
      
    </MemberSelect><br/>
    {/* <MemberLabel htmlFor='year'></MemberLabel>
    <MemberSelect>
      <option>2020-21</option>
      <option>2021-22</option>
      <option>2022-23</option>
      <option>2023-24</option>
      <option>2024-25</option>
    </MemberSelect> */}
    
    <br />
    {/* <MemberHThree>Income From Salary</MemberHThree> */}
   
    
    
    <br/>
     <MemberLabel htmlFor='valid'>Investment Period</MemberLabel>
     <MemberSelect name='valid' onChange={(e)=>{setFormData({...formData , investmentPeriod:e.target.value})}}>
      <option value='930650000'>0-1</option>
      <option value='930650001'>1-3</option>
      <option value='930650002'>3-5</option>
      <option value='930650003'>3-5</option>
    </MemberSelect>
    {/* <MemberInput id="valid" name="valid" type="number" /> */}
    <br/>
    
    <MemberLabel htmlFor='others'>Investment Date</MemberLabel>
    <MemberInput id="others" name="others" type="date" value={String(formData.InvestmentDate)} onChange={(e)=>{setFormData({...formData , InvestmentDate:String(e.target.value)})}} />
    <br/>
    <MemberLabel htmlFor='salary'>Investment Amount</MemberLabel>
    <MemberInput id="salary" name="salary" type="number" value={formData.InvestmentAmount} onChange={(e)=>{setFormData({...formData , InvestmentAmount:e.target.value})}} />
    {/* <MemberButton type='submit'>Save</MemberButton>
    <MemberButton type='button'>Next</MemberButton> */}

      </MemberForm>

    </>
  
  )
}

export default AddInvestment