import styled from "styled-components";
export const Container=styled.div`
    display: flex;
    max-width: 100vw;
    max-height: 100vh;
    /* border: 1px solid black; */

`


export const SubContainer=styled.div`
    width: 70%;
    height: 100vh;
    left:0;
    border:1px solid yellow;
`

export const SubContainerMid=styled.div`
width: 30%;
height: 100vh;
border:1px solid black;
`

export const SubContainerTwo=styled(SubContainer)`
width: 30vw;
right:0;
height: 100vh;
border-left: 1px solid #928c7399;
display: block;
padding: 8px;
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
    color: #989595;
    margin-bottom: 4px;
    margin-top: 4px;
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
`

export const Img=styled.img`
    width:70px;
    height: auto;
    border-radius: 50%;
    border:1px solid grey;
    margin:18px

`
export const BarContainer=styled.div`
width:70%;
height: auto;

`