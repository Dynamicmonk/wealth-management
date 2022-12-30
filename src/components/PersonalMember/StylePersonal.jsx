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
    padding:4% 17%
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
    margin: 6% 40%;
    /* margin: 20px; */
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
border:1px solid grey;

`
export const Container=styled.div`
    display: block;
    max-width: 100vw;
    max-height: 100vh;
    padding:10px
    /* border: 1px solid black; */

`


export const SubContainer=styled.div`
    width: 90vw;
    height: auto;
    /* left:0; */
    align-items: center;
    display:block;
    justify-content: center;
    margin:30px;
    border:1px solid grey;
`

export const SubContainerTwo=styled(SubContainer)`
width: 100%;
right:0;
height: auto;
/* border-left: 1px solid #928c7399; */
display: flex;
padding: 8px;
align-items: center;
justify-content: space-between;
overflow: hidden;
`
export const SubContainerThree=styled.div`
width: 100%;
/* margin-left: 20%;
margin-right:20%;  */
/* right:0; */
height: auto;
/* border-left: 1px solid #928c7399; */
display: flex;
padding: 4px;
align-items: center;
justify-content: space-around;
overflow: hidden;
/* border:1px solid black; */
border:none;
margin:5px;
`
export const SubContainerFor=styled(SubContainerThree)`
width: 94%;
margin:4% 3%;

/* right:0; */
height: auto;
/* border: 1px solid #928c7399; */
display: block;
padding: 4px;
align-items: center;
justify-content: space-around;
overflow: hidden;
/* border:1px solid black; */
`


export const CardContainer=styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 98%;
    margin: 10px;
    padding:10px;
    /* border:1px solid black */
`

export const Card=styled.div`
    display: block;
    background-color: #dee8eb;
    box-shadow: 1px  1px  3px grey;
    width: 300px;
    height: 120px;
    border-radius: 4px;
    padding: 10px;
    margin:15px;

`
export const Para=styled.p`
    font-size: 14px;
    color: #4d4b4b;
    margin: 2% 45%;
    /* margin: 25px; */
    font-size:22px;
    font-weight: bold;
    width:270px;
    /* margin-left:40px; */
    /* border:1px solid black */
`
export const ParaOne=styled(Para)`
    font-size:20px;
    color:black;

`

export const Bttn=styled.button`
width: 80px;
border:none;
border-radius: 2px;
height: auto;
font-size: 16px;
background-color: dodgerblue;
color:white;
`

export const Spun=styled.span`
display:flex;
align-items: center;
justify-content: space-between;
`
export const Spun2=styled(Spun)`
justify-content:center;
align-items: center;
text-align: center;
display:block;
margin: 5px 30px;
`

export const SpunP=styled.p`
font-size:16px;
text-align:center;
font-weight: bold;
letter-spacing:1px;
width:40%;

`
export const Mydiv=styled.div`
display: block;;
align-items:center;
justify-content:center;

`


export const Img=styled.img`
    width:70px;
    height: 70px;
    border-radius: 50%;
    border:1px solid grey;
    margin:18px;
    float: center;

`
export const BarContainer=styled.div`
width:100%;
height: auto;

`

/* export const MainContainer=styled.div`
    width: 100%;
    background-color: white;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    text-align: center;
    margin:0;
    padding:5px;
    
`
export const MemberLabel=styled.label`
    font-size: 19px;
    letter-spacing: 2px;
    color: black;
    font-weight: bold;
    text-align: left;
    width: 200px;
    display: inline-block;
   
`

export const MemberForm=styled.form`
    
    width: 100%;
    height: auto;
    
    justify-content: space-between;
    
    display: inline-block;
    
`

export const MemberH=styled.h2`
    font-size: 24px;
    letter-spacing: 1px;
    text-align: center;
    color:black;
    margin:20px;
    
    
`
export const MemberInput=styled.input`
    width: 300px;
    height: 30px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid grey;
    margin-right: 30px;
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


};
&:active{
background-color: white;
color: #293462;
border: 1px solid #293462;


}

` */
export const MemberFormDiv=styled.div`
width: 100%;
height: auto;
padding: 20px;
align-items: center;
justify-content: center;
/* border-top: 1px solid gray; */
/* box-shadow: 1px 1px 10px grey; */
`

export const MemberButton2=styled(MemberButton)`
    width: 300px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #293462;
    padding: 4px;
    letter-spacing: 1px;
    /* margin-top: 40px; */
    /* margin-right: 20px; */
    font-size: 17px;
    /* margin-bottom:10px; */

&:hover{
background-color: white;
color: #293462;
border: 1px solid #293462;


};
&:focus{
background-color: white;
color: #622943;
border: 1px solid #622943}
`

export const MemberHH=styled.h2`
    font-size: 24px;
    letter-spacing: 1px;
    text-align: center;
    color:black;
    /* width: 100px; */
    /* margin:10px; */
    /* width: 70px; */
    /* border:1px solid black; */
    
`

export const Bttndiv=styled.div`
width:50%;
margin-left:25%;
margin-right:25%;
margin-bottom:10px;

`