import React,{useState} from 'react';
import { FaPen } from 'react-icons/fa';
import Income from '../../Income/Income';
import {MyTable, TableData, TableRow, MainContainer, MemberH ,  MemberForm, MemberLabel, MemberInput, MemberButton, MemberHThree, MemberSelect} from '../../Income/StyleAddIncome';
// import './StyleFixedIncome.css'

function AddIncome({formData , setFormData}) {
  return (
    <>
    {/* <MemberH>Add Income </MemberH> */}
<MemberForm action="">
    <MemberLabel htmlFor="income">Income Type</MemberLabel>
    <MemberSelect  onChange={(e)=>{setFormData({...formData, IncomeType:e.target.value})}}>
      <option value='930650000'>Salary</option>
      <option value='930650001'>Property</option>
      <option value='930650004'>Rent</option>
      <option value='930650003'>Fixed Deposit</option>
      <option value='930650002'>Saving A/C</option>
      <option value='930650005'>Others</option>
    </MemberSelect><br/>
    {/* <MemberLabel htmlFor='year'>Period</MemberLabel>
    <MemberSelect value={formData.income.IncomeType} onChange={(e)=>{setFormData({...formData, income:{IncomeType:e.target.value}})}}>
      <option>2020-21</option>
      <option>2021-22</option>
      <option>2022-23</option>
      <option>2023-24</option>
      <option>2024-25</option>
    </MemberSelect> */}
    
    <br />
    {/* <MemberHThree>Income From Salary</MemberHThree> */}
    
    
    <MemberLabel htmlFor='others'>Income Frequency</MemberLabel>
    <MemberSelect type='text' onChange={(e)=>{setFormData({...formData, IncomeFrequency:e.target.value})}}>
      <option value='930650000'>one time</option>
      <option value='930650001'>weekly</option>
      <option value='930650002'>monthly/Annualy</option>
    </MemberSelect>
    <br/>
     <MemberLabel htmlFor='valid'>Income Date</MemberLabel>
    <MemberInput id="valid" name="valid" type="date" value={formData.IncomeDate} onChange={(e)=>{setFormData({...formData, IncomeDate:String(e.target.value)})}}/>
    <br/>
    <MemberLabel htmlFor='salary'>Income Amount</MemberLabel>
    <MemberInput id="salary" name="salary" type="number" value={formData.IncomeAmount} onChange={(e)=>setFormData({...formData , IncomeAmount:e.target.value})}/>
    
    <br />

    {/* <MemberButton type='submit'>Save</MemberButton>
    <MemberButton type='submit'>Next</MemberButton> */}

      </MemberForm>

    
    
    </>
    // <MainContainer>
    //   <MyTable>
    //     <thead>
    //       <tr>
    //         <th>Select</th>
    //         <th>S.No.</th>
    //         <th>Type</th>
    //         <th>Period</th>
    //         <th>Description</th>
    //         <th>Amount</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <TableRow className="TabeRow">
    //         <TableData><input type="radio" name='radio'/></TableData>
    //         <TableData>1</TableData>
    //         <TableData>Fixed</TableData>
    //         <TableData>2021-22</TableData>
    //         <TableData>Salary</TableData>
    //         <TableData>2000</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData>
    //       </TableRow>
    //       </tbody>
    //       </MyTable>
    //       </MainContainer>
  )
}

export default AddIncome