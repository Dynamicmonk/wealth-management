import React,{useState, useEffect} from 'react';
import { FaPen, FaPenNib, FaPenSquare, FaTrash } from 'react-icons/fa';
import { MainContainer, MemberH ,  MemberForm, MemberLabel, MemberInput, MemberButton, MemberHThree, MemberSelect } from './StyleFixedIncome'
import {MyTable, TableData, TableRow} from './StyleFixedIncome';
import './StyleFixedIncome.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchMemberIncome, getallincome , getallloading } from '../../features/income/IncomeSlice';
import { useParams } from 'react-router-dom';
import { ReqstId } from '../../features/signin/auth';


function FixedIncome() {

const {id}= useParams()
  // const memberToDisplay= useSelector(getUserByID(Number(id)))
  const allincomedata=useSelector(getallincome);
  const allloadingdata=useSelector(getallloading);
  const dispatch= useDispatch();

  let contentToRender='';
  const rid = ReqstId
  useEffect(() => {
    let payload ={
      id : rid
    }
    dispatch(fetchMemberIncome(payload))  
  }, [])

  
  return (
    <>
    <table>
  <thead>
    <tr>
      <th scope="col">Request ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Income Type</th>
      <th scope="col">Income Date</th>
      <th scope="col">Income Amount</th>
    </tr>
  </thead>
  <tbody>
    {/* {allloadingdata==='pending'?( */}
    <tr>
      <th scope="row" className='loader'></th></tr>
      {/* ) */}
    {/* : allincomedata.map((postincome, index)=> */}
     {/* <h1 key={postincome.RequestId}>{postincome.FullName}</h1> */}
    
    <tr 
    // key={index}
    >
      <th scope="row">
        {/* {postincome.RequestId} */}
      </th>
      <td>
        {/* {postincome.FullName} */}
      </td>
      <td>
        {/* {postincome.IncomeType} */}
        </td>
      <td>
        {/* {postincome.IncomeDate} */}
        </td>
      <td>
        {/* {postincome.IncomeAmount} */}
        </td>
    </tr>
    {/* )} */}
  </tbody>
</table>



    {/* {allloadingdata==='pending'?(<><div className='loader'></div></>)
    : allincomedata.map((postincome, index)=>
    <h1 key={postincome.RequestId}>{postincome.FullName}</h1>
    )} */}
    </>
    // <MainContainer>
    // <MyTable>
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
          
    //         {allloadingdata==='pending'?(<><div className='loader'></div></>)
    // : allincomedata.map((postincome, index)=>{
    //   <TableRow className="TabeRow" key={index}>
    //   <TableData><input type="radio" name='radio'/></TableData>
    //         <TableData><p>{postincome.FullName}</p></TableData>
    //         <TableData><p>{postincome.RequestId}</p></TableData>
    //         {/* <TableData>{postincome.FullName}</TableData>
    //         <TableData>{postincome.IncomeType}</TableData>
    //         <TableData>{postincome.IncomeAmount}</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData> */}
    //         </TableRow>
    // })}
            
          
          //   <TableRow>
          //   <TableData><input type="radio" name='radio' /></TableData>
          //   <TableData>1</TableData>
          //   <TableData>Fixed</TableData>
          //   <TableData>2021-22</TableData>
          //   <TableData>Salary</TableData>
          //   <TableData>2000</TableData>
          //   <TableData className='tdd'><FaPen className='tdd'/></TableData>
          // </TableRow>
          // <TableRow>
          //   <TableData><input type="radio" className='radio' name='radio' /></TableData>
          //   <TableData>3</TableData>
          //   <TableData>Variable</TableData>
          //   <TableData>2020-21</TableData>
          //   <TableData>Return</TableData>
          //   <TableData>500</TableData>
          //   <TableData className='tdd'><FaPen className='tdd'/></TableData>
          // </TableRow>
          // <TableRow>
          //   <TableData><input type="radio" name='radio'/></TableData>
          //   <TableData>4</TableData>
          //   <TableData>Fixed</TableData>
          //   <TableData>2023-24</TableData>
          //   <TableData>Service</TableData>
          //   <TableData>1000</TableData>
          //   <TableData className='tdd'><FaPen className='tdd'/></TableData>
          // </TableRow>
        // </tbody> 
      // </MyTable>
//  <MemberH>Add Income </MemberH>
// <MemberForm action="">
//     <MemberLabel htmlFor="income">Type</MemberLabel>
//     <MemberSelect>
//       <option>Fixed</option>
//       <option>Variable</option>
//     </MemberSelect><br/>
//     <MemberLabel htmlFor='year'>Period</MemberLabel>
//     <MemberSelect>
//       <option>2020-21</option>
//       <option>2021-22</option>
//       <option>2022-23</option>
//       <option>2023-24</option>
//       <option>2024-25</option>
//     </MemberSelect>
    
//     <br />
//      <MemberHThree>Income From Salary</MemberHThree>
//     <MemberLabel htmlFor='salary'>Annual Income</MemberLabel>
//     <MemberInput id="salary" name="salary" type="number"/>
    
//     <br />
    
//     <MemberLabel htmlFor='others'>Hike(%wise)</MemberLabel>
//     <MemberInput id="others" name="others" type="number" />
//     <br/>
//      <MemberLabel htmlFor='valid'>Valid till</MemberLabel>
//     <MemberInput id="valid" name="valid" type="number" />
//     <br/>

//     <MemberButton type='submit'>Add Income</MemberButton>
//     <MemberButton type='button'>Cancel</MemberButton>

//       </MemberForm>   


    // </MainContainer>
  )
}

export default FixedIncome;