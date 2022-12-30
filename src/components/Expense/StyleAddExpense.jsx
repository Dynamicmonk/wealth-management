
import styled from "styled-components";

export const MainContainer=styled.div`
    width: 100%;
    background-color: white;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    text-align: center;
    display: block;
    
`
export const MemberLabel=styled.label`
    font-size: 18px;
    letter-spacing: 1px;
    color: black;
    font-weight: bold;
    text-align: right;
    width: 200px;
    display: inline-block;
        &::after{
        content: "*";
  color: red;
    }
`

export const MemberForm=styled.form`
    
    width: 60%;
    height: auto;
    align-items: center;
    justify-content: center;
    /* border: 1px solid grey; */
    margin: 2.5% 20%;
    text-align: center;
`

export const MemberH=styled.h2`
    font-size: 24px;
    letter-spacing: 1px;
    text-align: center;
    color:black;
    margin:20px;
    /* width: 300px; */
    
`
export const MemberInput=styled.input`
    width: 280px;
    height: 30px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid grey;
    margin-left: 20px;
    margin-top: 20px;

`

export const MemberButton=styled.button`
    width: 180px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #293462;
    padding: 4px;
    letter-spacing: 1px;
    margin-top: 40px;
    margin-right: 20px;
    font-size: 17px;

&:hover{
background-color: white;
color: #293462;
border: 1px solid #293462;


}
`

export const MemberHThree=styled.h3`
  font-size:18px;
  color:black;
  text-align  :center ;
  padding:4px;
  margin:10px;
`
export const MemberSelect=styled.select`
    width: 280px;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid grey;
    margin-left: 20px;
    margin-top: 20px;
`
export const MyTable=styled.table`
width:100%;
/* border:1px solid #EEEDE7; */
padding:8px

`
export const TableRow=styled.tr`
margin-top:5px;
height:10px;
/* border:1px solid black; */
`
export const TableData=styled.td`
/* margin-top:15px;
margin-bottom:15px */
border:1px solid #EEEDE7;
margin-top:5px;
height:30px;
`