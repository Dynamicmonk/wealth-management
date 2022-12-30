import styled from "styled-components";

export const MainContainer=styled.div`
    width: 100%;
    background-color: white;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    text-align: center;
    
`
export const MemberLabel=styled.label`
    font-size: 18px;
    letter-spacing: 1px;
    color: black;
    font-weight: bold;
    text-align: right;
    width: 180px;
    display: inline-block;
`

export const MemberForm=styled.form`
    
    width: 95%;
    height: auto;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black; */
    margin: 2.5%;
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
export const TargetContainer=styled.div`
width:100%;
height: auto;
/* border:1px solid grey; */

`