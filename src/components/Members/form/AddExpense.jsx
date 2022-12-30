import React from 'react'
import {MemberForm, MemberLabel, MemberInput, MemberButton, MemberHThree, MemberSelect} from '../../Expense/StyleAddExpense'

function AddExpense({formData , setFormData}) {
  return (
    <>
    <MemberForm action="">
    <MemberLabel htmlFor="expense">Expense Type</MemberLabel>
    <MemberSelect name='expense' onChange={(e)=>setFormData({...formData , ExpenseType:e.target.value})}>
    <option value='930650000'>Mutual Funds</option>
      <option value='930650001'>Fixed Deposit</option>
      <option value='930650002'>Lend Money to others</option>
      <option value='930650003'>Real Estates</option>
      <option value='930650004'>Bonds</option>
      <option value='930650005'>Public Provident Fund</option>
      <option value='930650006'>National Pension Scheme</option>
      <option value='930650007'>Senior citizen Pension Scheme</option>
    </MemberSelect><br/>
    {/* <MemberLabel htmlFor='year'>Period</MemberLabel>
    <MemberSelect>
      <option>2020-21</option>
      <option>2021-22</option>
      <option>2022-23</option>
      <option>2023-24</option>
      <option>2024-25</option>
    </MemberSelect> */}
    
    <br />
    {/* <MemberHThree>Income From Salary</MemberHThree> */}
    
{/*     
    <br />
    
    <MemberLabel htmlFor='others'>Expense Frerquency</MemberLabel>
    <MemberSelect name='others'>
      <option value=''>Daily</option>
      <option value=''>Weekly</option>
      <option value=''>Annulay</option>
    </MemberSelect> */}
    <br/>
     <MemberLabel htmlFor='valid'>Expense Date</MemberLabel>
    <MemberInput id="valid" name="valid" type="date" value={formData.Expensedate} onChange={(e)=>{setFormData({...formData , ExpenseDate:String(e.target.value)})}}/>
    <br/>
    <MemberLabel htmlFor='salary'>Expense Amount</MemberLabel>
    <MemberInput id="salary" name="salary" type="number" value={formData.ExpenseAmount} onChange={(e)=>{setFormData({...formData , ExpenseAmount:e.target.value})}}/>

    {/* <MemberButton type='submit'>Save</MemberButton>
    <MemberButton type='submit'>Next</MemberButton> */}

      </MemberForm>

    </>
  )
}

export default AddExpense