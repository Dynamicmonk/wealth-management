import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import {MyTable, TableData, TableRow, MainContainer} from './StyleFinance';
import { FaPen} from 'react-icons/fa';
import { fetchainvest, getinvest , getallloading } from '../features/investment/InvestmentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ReqstId } from '../features/signin/auth';




function Investment() {

  
  const allinvestdata=useSelector(getinvest);
  const allloadingdata=useSelector(getallloading);
  const dispatch = useDispatch()

  const rid = ReqstId
  useEffect(() => {
    let payload ={
      id : rid
    }
    dispatch(fetchainvest(payload))  
  }, [])
  
  return (
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
    //         <TableData>LIC</TableData>
    //         <TableData>2000000</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData>
    //       </TableRow>
    //       <TableRow>
    //         <TableData><input type="radio" name='radio' /></TableData>
    //         <TableData>1</TableData>
    //         <TableData>Variable</TableData>
    //         <TableData>2021-22</TableData>
    //         <TableData>Share Market</TableData>
    //         <TableData>200000</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData>
    //       </TableRow>
    //       <TableRow>
    //         <TableData><input type="radio" className='radio' name='radio' /></TableData>
    //         <TableData>3</TableData>
    //         <TableData>Variable</TableData>
    //         <TableData>2020-21</TableData>
    //         <TableData>Mutual Funds</TableData>
    //         <TableData>500000</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData>
    //       </TableRow>
    //       <TableRow>
    //         <TableData><input type="radio" name='radio'/></TableData>
    //         <TableData>4</TableData>
    //         <TableData>Fixed</TableData>
    //         <TableData>2023-24</TableData>
    //         <TableData>Fixed Deposit</TableData>
    //         <TableData>1000000</TableData>
    //         <TableData className='tdd'><FaPen className='tdd'/></TableData>
    //       </TableRow>
    //     </tbody>
    //   </MyTable>
    //   </MainContainer>
    <>

    <table>
  <thead>
    <tr>
      <th scope="col">Request ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Investment Type</th>
      <th scope="col">Investment Date</th>
      <th scope="col">Investment Amount</th>
    </tr>
  </thead>
  <tbody>
    {/* {allloadingdata==='pending'?(<tr>
      <th scope="row" className='loader'></th></tr>)
    : allinvestdata.map((postinvest, index)=>
    // <h1 key={postincome.RequestId}>{postincome.FullName}</h1>
    
    <tr key={index}>
      <td>{postinvest.investmentId}</td>
      {/* <td>{postinvest.RequestId}</td> 
      <td>{postinvest.FullName}</td>
      <td>{postinvest.InvestmentType}</td>
      <td>{postinvest.InvestmentDate}</td>
      <td>{postinvest.InvestmentAmount}</td>
    </tr>
    )} */}
  </tbody>
</table>

    
    
    </>

  )
}

export default Investment;