// import { userInfo } from "os";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewMemberExpenseApi } from "../../features/expense/ExpenseSlice";
import { createNewIncomeAPI } from "../../features/income/IncomeSlice";
import { createNewMemberInvestmentApi } from "../../features/investment/InvestmentSlice";
import { ReqstId } from "../../features/signin/auth";
// import { Navigate } from "react-router-dom";
import { createNewMemberApi, userID } from "../../features/users/UserSlice";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import AddInvestment from "./AddInvestment";
import AddNewMember, { relationship } from "./AddNewMember";
import "./StyleMemberForm.css";


function MemberForm() {
  var RID = ReqstId
  const [page, setPage] = useState(0);
  const FormTitle = ["General", "Income", "Investment", "Expense"];

  const pageBody = () => {
    if (page === 0) {
      return <AddNewMember formData={formData} setFormData={setFormData} handleOnChange={handleOnChange} />;
    } else if (page === 1) {
      return <AddIncome formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <AddInvestment formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <AddExpense formData={formData} setFormData={setFormData} />;
    } else {
      return <h1>No such page found</h1>; 
    }
  };

const[relate, setRelate] = useState('');
var relation=relate ;
  const [formData, setFormData] = useState({
      FirstName: "",
      LastName: "",
      Phone1: "",
      Email: "",
      Password :'',
      IsNewSignup: "true",
      PrimaryMemberId: ReqstId,
      RelationshipType:'',
      contactRelationship: {
        RelationshipType: ''},
      RequestId: '',
      FullName: "",
      IncomeType: "",
      IncomeAmount: "",
      IncomeDate: "",
      IncomeFrequency: "",
      Contact: "",
      FullName: "",
      ExpenseType: "",
      ExpenseAmount: "",
      ExpenseDate: "",
      Contact: "",
      FullName: "",
      InvestmentType: "",
      InvestmentAmount: "",
      InvestmentDate: "",
      investmentPeriod: "",
      Contact: userID
  });

const validation =()=>{
 const {FirstName , LastName , Email , Phone1, contactRelationship : { RelationshipType }, Password} = formData;
 if(FirstName.length<1){
  return "FirstName is required"
 }
}

const handleOnChange = (e)=>{
  const name = e.target.name;
  const value = e.target.value;
  setFormData({...formData, [name]:value})
}

  const dispatch = useDispatch();
  const navigate = useNavigate()
var associateMemberId;
  const handleSubmit = (e)=>{
    const {FirstName , LastName , IsNewSignup , PrimaryMemberId , relationshipType, contactRelationship:{RelationshipType} ,Phone1 , Email, Password,FullName, IncomeType,IncomeAmount, IncomeDate,IncomeFrequency, ExpenseType, ExpenseAmount, ExpenseDate, InvestmentType,
    InvestmentAmount, InvestmentDate, investmentPeriod, Contact} = formData;
      dispatch(createNewMemberApi({FirstName , LastName , Phone1 , Email , Password, relationship, IsNewSignup , PrimaryMemberId , contactRelationship:{RelationshipType}})).unwrap().then(res=>{
        console.log("Add new member console");
        console.log(res);
        var rqstd= res.RequestId;
        var incomeType="2c913573-8932-ed11-9db1-6045bdad1ab7"
        dispatch(createNewIncomeAPI({FirstName , LastName, IncomeType:incomeType,  IncomeAmount, IncomeDate , IncomeFrequency, Contact:rqstd })).unwrap().then(res=>{
          console.log(res)
          var investType="66ba2ab7-8932-ed11-9db1-6045bdad1ab7"
        dispatch(createNewMemberInvestmentApi({FirstName , LastName, InvestmentType:investType,  InvestmentAmount, InvestmentDate , investmentPeriod , Contact:rqstd })).unwrap().then(res=>{
          var expenseType="095924a0-8932-ed11-9db1-6045bdad1ab7";
          console.log(res)
          dispatch(createNewMemberExpenseApi({FirstName , LastName, ExpenseType:expenseType,  ExpenseAmount, ExpenseDate , Contact:rqstd })).unwrap().then(res=>{
            console.log(res)
          })
        })
        })
        // setFormData(null) 
      }) 
    
    }
  return (
    <>
      <div className="form-container">
        {/* <div className='progressbar' style={{width: page===0 ? "25%": page===1 ? "50%":page===2 ? "75%": "100%"}}></div> */}
        <div className="form-title">{FormTitle[page]}</div>
        <div className="form-body">{pageBody()}</div>
        <div className="form-footer">
          <button
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Back
          </button>
          <button type="button"
            onClick={() => {
              if (page === FormTitle.length - 1) {
                handleSubmit()
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitle.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default MemberForm;
