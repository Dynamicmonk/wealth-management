import React, {useEffect} from 'react';
// import user from '../../assets/images/user.png';
import { Card, CardContainer, Container , Para, SubContainer, Spun2, SubContainerTwo , ParaOne, Bttn , Spun, Img, BarContainer, SubContainerMid }  from './StyleDashboard';
import {FaChartLine } from 'react-icons/fa';
import userpic from '../../assets/images/userpic.png';
import { Chart } from "react-google-charts";
import axios from 'axios';
// import { fetchallusers, getallloading, getallusers } from '../features/users/UserSlice';
// import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './StyleDashboard.css'
import { SubContainerFor } from '../Members/StyleMembers';
import { Navigate, useNavigate, Link , useParams } from 'react-router-dom';
import {getallusers , getallloading, fetchallusers , updateMemberApi, getUserByID } from '../features/users/UserSlice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getuser, ReqstId } from '../features/signin/auth';
import Slider from "react-slick";


function Dashboard() {
// const url="https://localhost:44363/api/Investments/UserInvestments?InvestmentAmount=5000";
// const url="https://jsonplaceholder.typicode.com/users"
// useEffect(() => {
 
//   var data = JSON.stringify({
//     "FullName": "Ravan Bhaiji",
//     "InvestmentType": "66ba2ab7-8932-ed11-9db1-6045bdad1ab7",
//     "InvestmentAmount": 5000,
//     "InvestmentDate": "2022-09-30",
//     "investmentPeriod": 930650001,
//     "Contact": "90926a5f-383a-ed11-9db0-6045bdad1ab7"
//   });
  
//   var config = {
//     method: 'post',
//     url: 'https://localhost:44363/api/Investments/UserInvestments',
//     headers: { 
//       'Content-Type': 'application/json'
//     },
//     data : data
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }, [])

/////////////////////////////////////////////////////////////



  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };
  
  const allusersdata=useSelector(getallusers);
  const allloadingdata=useSelector(getallloading);
  const dispatch= useDispatch();

let contentToRender='';
const {id}= useParams()
const userId = ReqstId;
useEffect(() => {
  let payload ={
    id : userId
  }
  dispatch(fetchallusers(payload)).unwrap().then(res=>console.log(res)).catch(err=>console.log(err))
  }, [])

  
  const navigate= useNavigate();
  // const getUserDetail= useSelector(getuser)
  // console.log("User ReqstID : "+ReqstId)

////////////////////////////////////////////////////

const settings = {
  dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
  
  };


//////////////////////////////////////////////////////

    // contentToRender= allloadingdata==='pending'?(<><div className='loader'></div></>)
    // : allusersdata.map((postuser, index)=><Spun2 className='cards' key={index}>
    // <Img src={userpic} alt={postuser.FirstName} className="dashimg" />
    // <p className='dashp'>{postuser.FirstName}</p>
    // <p className='dashp'>{postuser.LastName}</p>
    // </Spun2>)

    contentToRender= allloadingdata==='pending'?(<><Spinner animation="border" variant='primary' role="status">
       <span className="visually-hidden">Loading...........</span>
     </Spinner></>):(<>{allusersdata.map((postuser, index)=>{<SubContainerTwo key={postuser.id}> Members <br/><br/>
     <Spun2><Img src={postuser.mobile}/><p>{postuser.FirstName}</p><p>{postuser.LastName}</p></Spun2>
          {/* <Spun2><Img src={userpic}/><p>User-2</p><p>(Father)</p></Spun2>
         <Spun2><Img src={userpic}/><p>User-3</p><p>(Spouse)</p></Spun2>
         <Spun2><Img src={userpic}/><p>User-4</p><p>(Sister)</p></Spun2>
         <Spun2><Img src={userpic}/><p>User-5</p><p>(Brother)</p></Spun2>
         <Spun2><Img src={userpic}/><p>User-6</p><p>(Kid)</p></Spun2>  */}
       </SubContainerTwo>
 }
   )}</>)


  return (
    <Container>
      <SubContainer>
        <CardContainer>
          <Card>
            <Para>Total Investment</Para>
            <Spun>
            <ParaOne><sup><small>Rs</small></sup> 400000</ParaOne>
            <Bttn><FaChartLine/>59%</Bttn>
            </Spun>
            <Para>you made 32b extra this year</Para>
          </Card>
          <Card>
            <Para>Total Income</Para>
            <Spun>
            <ParaOne><sup><small>Rs</small></sup> 750000</ParaOne>
            <Bttn><FaChartLine/>49%</Bttn>
            </Spun>
            <Para>you made 52b extra this year</Para>
          </Card>
          <Card>
            <Para>Total Expenses</Para>
            <Spun>
            <ParaOne><sup><small>Rs</small></sup> 10000000</ParaOne>
            <Bttn><FaChartLine/>19%</Bttn>
            </Spun>
            <Para>you made 92b extra this year</Para>
          </Card>
        </CardContainer>
        <BarContainer>
        <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
        </BarContainer>
      </SubContainer>
      <SubContainerMid>

        
      </SubContainerMid>
      {/* <SubContainerFor> */}
        {/* <div className="mycontainer"> */}
      {/* <Slider {...settings}>
      
      {contentToRender} 
          </Slider> */}
        
        {/* </div> */}
        {/* </SubContainerFor> */}
      
        
      {/* Members <br/><br/>
        <Spun2><Img src={userpic}/><p>User-1</p><p>(Mother)</p></Spun2>
        <Spun2><Img src={userpic}/><p>User-2</p><p>(Father)</p></Spun2>
        <Spun2><Img src={userpic}/><p>User-3</p><p>(Spouse)</p></Spun2>
        <Spun2><Img src={userpic}/><p>User-4</p><p>(Sister)</p></Spun2>
        <Spun2><Img src={userpic}/><p>User-5</p><p>(Brother)</p></Spun2>
        <Spun2><Img src={userpic}/><p>User-6</p><p>(Kid)</p></Spun2> */}
        
        {/* <Img src={userpic}/><br/>
        <Img src={userpic}/><br />
        <Img src={userpic}/><br />
        <Img src={userpic}/><br /> */}
      




    </Container>
  )
}

export default Dashboard