// import  {MemberForm, MemberLabel, MemberH, MemberInput, MemberButton, MemberFormDiv, Para, Bttndiv  } from './StylePersonal' 
// import React, {useEffect} from 'react'
// import { Navigate, useNavigate, Link , useParams } from 'react-router-dom';
// import {getallusers , getallloading, fetchallusers , updateMemberApi, getUserByID, createNewMemberApi, allusersreceived } from '../features/users/UserSlice'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { useForm } from "react-hook-form";
// import { Controller } from 'react-hook-form';
// function PersonalMember() {
//   const {id}= useParams()
//   // const userToEdit = useSelector(getUserByID(Number(id)))
//   // const memberToDisplay= useSelector(getUserByID(Number(id)))
//   const navigate= useNavigate();

// // const updateMember=(data)=>{
// //   let payload = {
// //     ContactId     : Number(id),
// //     FirstName     : data.FirstName,
// //     LastName      : data.LastName,
// //     Gender        : data.Gender,
// //     Age           : data.Age,
// //     MaritalStatus : data.MaritalStatus,
// //     Phone1        : data.Phone1,
// //     Relationship  : data.Relationship

// //   };
// //   dispatch(updateMemberApi(payload))
// //   .unwrap().then((res)=>console.log(res))
// // }


//   // const moveToAdd=()=>{
//   //   navigate('newmember')
//   // }
// //  const createMember=useSelector(getallusers);
//    const allloadingdata=useSelector(getallloading);
//    const allmembersdat= useSelector(getallusers)
//    const dispatch= useDispatch();


// const { register, handleSubmit } = useForm({
//     defaultValues:{
//       FirstName: '',
//       LastName: '',
//       Age: '',
//       Gender: '',
//       MaritalStatus: '',
//       Relationship: '',
//       // pan:'',
//       // aadhar:'',
//       MobileNumber: '',
//       Email: ''
//     }
//   });

// const createNewMember=(data)=>{
//   debugger;
//     let payload = {
      
//     FirstName: data.FirstName,
//     LastName: data.LastName,
//     Gender : data.Gender,
//     Age:data.Age,
//     MobileNumber:data.MobileNumber,
//     // PAN:data.pan,
//     // AADHAR:data.aadhar,
//     Email:data.Email,
//     MaritalStatus:data.MaritalStatus,
//     Relationship:data.Relationship
//   };
  

//   // dispatch(createNewMemberApi(payload))
//   // .unwrap().then((res)=>{
//   //   console.log(res)
//   //   console.log("member created check database")})
// }

// console.log(payload)
// // let contentToRender= allloadingdata==='pending'?(<><p>
// //       <span className="visually-hidden">Loading...........</span>
// //     </p></>): createNewMemberApi.map((postuser, index)=><>
// //     <div key={index}>
// //     <p >Personal Info</p>
// //     <div>
// //         <label htmlFor="firstname">First Name</label>
// //      <input  id="firstname" name="FirstName" type="text" />
// //          <label htmlFor='lastname'>Last Name</label>
// //     <input id="lastname" name="LastName" type="text"/>
// //      <br/>
// //     <label htmlFor='age'>Age</label>
// //      <input title='only number' id="age" name="age" type="number" onChange={(e)=>e.target.value}/>
// //      <label htmlFor='gender'>Gender</label>
// //      <input id="gender" name="gender" type="text" /><br/>
// //      <label htmlFor='marital'>Marital Status</label>
// //      <input id="marital" name="marital" type="text"/>
// //      <label htmlFor='relation'>Relationship to me</label>
// //      <input id="relation" name="relation" type="text"/>
// //      </div><br/>
// //      <p>Document Info</p>
// //     <div>
// //     <label htmlFor='pan'>PAN no.</label>
// //     <input id="pan" name="pan" type="text"/>
// //     <label htmlFor='aadhar'>AADHAR No.</label>
// //     <input id="aadhar" name="aadhar" type="text" />
// //     </div>
// //     <p>Contact Info</p>
// //     <div>
// //     <label htmlFor='mobile'>Mobile No.</label>
// //     <input id="mobile" name="mobile" type="number" />
// //      <label htmlFor='mail'>E-Mail</label>
// //      <input id="mail" name="mail" type="email"/>
// //      </div>
// //      <div>
// //        <button type='button' disabled={allloadingdata=='pending'}>{allloadingdata=='pending'?'....create':'create'}</button> 
// //      <button type='button'>Cancel</button> 

// //   </div>
// //   </div>
// // </>)
//   return (
//     <>
//     {/* ******************************************************************************************************/}
//      <MemberForm action="">
//  {/* <form onSubmit={handleSubmit(createNewMember)}>
//  <input {...register("FirstName")} />
//  <input {...register("LastName")} />
//  <input {...register("MobileNumber")} />
//  <input {...register("Email")} />
//  <input {...register("Relationship")} />
//  <input {...register("Age")} />

//       <select {...register("Gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" /> */}
//       {/* </form> */}


//   <label htmlFor='FirstName'>First Name</label>
//   <Controller
//   name='FirstName'
//   control={register}
//   render={({field})=><input type="text" {...field}/>}
//   /><br/><br/>
//       <label htmlFor='LastName'>Last Name</label>
//       <Controller
//   name='LastName'
//   control={register}
//   render={({field})=><input type="text" {...field}/>}
//   /><br/>

//   <label htmlFor='Gender'>Gender</label>
//   <Controller
//   name='Gender'
//   control={register}
//   render={({field})=><input type="text" {...field}/>}
//   /><br/><br/>

//   <label htmlFor='Age'>Age</label>
//   <Controller
//   name='Age'
//   control={register}
//   render={({field})=><input type="number" {...field}/>}
//   /><br/><br/>

//   <label htmlFor='Email'>Email</label>
//   <Controller
//   name='Email'
//   control={register}
//   render={({field})=><input type="email" {...field}/>}
//   /><br/><br/>

//   <label htmlFor='MaritalStatus'>Marital Status</label>
//   <Controller
//   name='MaritalStatus'
//   control={register}
//   render={({field})=><input type="text" {...field}/>}
//   /><br/><br/>

//   <label htmlFor='Relationship'>Relationship</label>
//   <Controller
//   name='Relationship'
//   control={register}
//   render={({field})=><input type="text" {...field}/>}
//   /><br/><br/>

  
      
// <button type='submit'>Submit</button>      
//       {/* <input type="submit" />  */}
//       <br/>
//       {/* <button type='submit' disabled={allloadingdata==='pending'}>{allloadingdata==='pending'?'... wait':'Create Member'}</button>
//       <button type='button' style={{backgroundColor:'dodgerblue', color:'white', width:'100px', height:'40px', borderRadius:'4px', fontSize:'18px', marginLeft:'6px', border:'none'}}>Close</button> */}
     




//     {/* {contentToRender} 
//       <Para>Personal Info</Para>*/}


//       {/* ........................................................... */}
//     {/* <MemberFormDiv>
//         <MemberLabel htmlFor="firstname">First Name</MemberLabel>
//      <MemberInput  id="firstname" name="FirstName" type="text" />
//          <MemberLabel htmlFor='lastname'>Last Name</MemberLabel>
//     <MemberInput id="lastname" name="LastName" type="text"/>
//      <br/>
//     <MemberLabel htmlFor='age'>Age</MemberLabel>
//      <MemberInput tooltip='only number' id="age" name="age" type="number"/>
//      <MemberLabel htmlFor='gender'>Gender</MemberLabel>
//      <MemberInput id="gender" name="gender" type="text"/><br/>
//      <MemberLabel htmlFor='marital'>Marital Status</MemberLabel>
//      <MemberInput id="marital" name="marital" type="text" />
//      <MemberLabel htmlFor='relation'>Relationship to me</MemberLabel>
//      <MemberInput id="relation" name="relation" type="text" />
//      </MemberFormDiv><br/>
//      <Para>Document Info</Para>
//     <MemberFormDiv>
//     <MemberLabel htmlFor='pan'>PAN no.</MemberLabel>
//     <MemberInput id="pan" name="pan" type="text" />
//     <MemberLabel htmlFor='aadhar'>AADHAR No.</MemberLabel>
//     <MemberInput id="aadhar" name="aadhar" type="text" />
//     </MemberFormDiv>
//     <Para>Contact Info</Para>
//     <MemberFormDiv>
//     <MemberLabel htmlFor='mobile'>Mobile No.</MemberLabel>
//     <MemberInput id="mobile" name="mobile" type="number" />
//      <MemberLabel htmlFor='mail'>E-Mail</MemberLabel>
//      <MemberInput id="mail" name="mail" type="email" />*/}
//      {/* </MemberFormDiv> */}

//      {/* .................................................. */}
//      {/*
//      <Bttndiv>
//        <MemberButton type='button' onClick={moveToAdd}>Add New Member</MemberButton> 
//      <MemberButton type='button'>Cancel</MemberButton> 

//   </Bttndiv>*/}
//       </MemberForm>
//     </>
//   )
// }

// export default PersonalMember

