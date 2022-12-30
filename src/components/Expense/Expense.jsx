import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import {MyTable, TableData, TableRow, MainContainer} from './StyleExpense';
import { FaPen} from 'react-icons/fa';
import { fetchallUserExpense, getallexpense , getallloading } from '../features/expense/ExpenseSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Expense() {
const allexpensedata=useSelector(getallexpense);
  const allloadingdata=useSelector(getallloading);
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(fetchallUserExpense())
  }, [])
  

  return (
    <>
        <table>
  <thead>
    <tr>
      <th scope="col">Request ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Expense Type</th>
      <th scope="col">Expense Date</th>
      <th scope="col">Expense Amount</th>
    </tr>
  </thead>
  <tbody>
    {/* {allloadingdata==='pending'?(<tr>
      <th scope="row" className='loader'></th></tr>)
    : allexpensedata.map((postexpense, index)=>
      <tr key={index}>
      <th scope="row">{postexpense.RequestId}</th>
      <td>{postexpense.FullName}</td>
      <td>{postexpense.ExpenseType}</td>
      <td>{postexpense.ExpenseDate}</td>
      <td>{postexpense.ExpenseAmount}</td>
    </tr>
    )} */}
  </tbody>
</table>


          {/* {allloadingdata==='pending'?(<><div className='loader'></div></>)
    : allexpensedata.map((postexpense, index)=>(<>
    <h1 key={index}>{postexpense.FullName}</h1>
    <h1>{postexpense.ExpenseAmount}</h1> */}
    </>
    // )
    // )}
    // </>

      //     <TableRow className="TabeRow">
      //       <TableData><input type="radio" name='radio'/></TableData>
      //       <TableData>1</TableData>
      //       <TableData>Fixed</TableData>
      //       <TableData>2021-22</TableData>
      //       <TableData>Loan</TableData>
      //       <TableData>200000</TableData>
      //       <TableData className='tdd'><FaPen className='tdd'/></TableData>
      //     </TableRow>
      //     <TableRow>
      //       <TableData><input type="radio" name='radio' /></TableData>
      //       <TableData>1</TableData>
      //       <TableData>Variable</TableData>
      //       <TableData>2021-22</TableData>
      //       <TableData>Share Market</TableData>
      //       <TableData>500000</TableData>
      //       <TableData className='tdd'><FaPen className='tdd'/></TableData>
      //     </TableRow>
      //     <TableRow>
      //       <TableData><input type="radio" className='radio' name='radio' /></TableData>
      //       <TableData>3</TableData>
      //       <TableData>Variable</TableData>
      //       <TableData>2020-21</TableData>
      //       <TableData>Mutual Funds</TableData>
      //       <TableData>400000</TableData>
      //       <TableData className='tdd'><FaPen className='tdd'/></TableData>
      //     </TableRow>
      //     <TableRow>
      //       <TableData><input type="radio" name='radio'/></TableData>
      //       <TableData>4</TableData>
      //       <TableData>Fixed</TableData>
      //       <TableData>2023-24</TableData>
      //       <TableData>Fixed Deposit</TableData>
      //       <TableData>1000000</TableData>
      //       <TableData className='tdd'><FaPen className='tdd'/></TableData>
      //     </TableRow>
      //   </tbody>
      // </MyTable>
      // </MainContainer>

  )
}

 

export default Expense