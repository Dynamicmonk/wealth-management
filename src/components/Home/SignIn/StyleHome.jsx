import styled from "styled-components";

export const Container=styled.div`
    
max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const InnerDiv=styled.div`
     width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;

  img{
    width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  };

  h1{
    position: absolute;
    z-index: 1000;
    top: 9%;
    color: dodgerblue;
    left: 10%;
    top: 20%;
    font-size: 28px;
    font-weight: bolder;
    color: rgb(23, 22, 22);
    width: 450px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 5px;
  };
    p{
        position: absolute;
    z-index: 1000;
    color: #2a3931;
    left: 10%;
    top: 25%;
    font-size: 20px;
    font-weight: bolder;
    width: 405px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    letter-spacing: 5px;
    };
`

export const SubContainer=styled.div`
    width: 30%;
  height: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 24px ;
`

export const FormFeed=styled.form`
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px;
    width: 397px;
    padding: 10px
`

export const HeaderText=styled.h1`
    color: grey;
    margin-bottom: 15px;
    font-size: 22px;
    transition: 0.3s all ease-out;
    text-align: center;
    display: block;
    padding: 4px;
`

export const HomeInput=styled.input`
margin-top: 20px;
width: 380px;
height: 30px;
height: 3rem;
border:1px solid grey;
box-sizing: border-box;
padding-left: 5px;
border-radius: 3px;
`

export const SpanBttn=styled.span`
    display: flex;
    margin: 10px;
    width: 200px;
    margin-left: 0;
`

export const DivBttn=styled.div`
    align-items: center;
    justify-content: center;
    display: block;
    width: 397px;
    margin: 0;
`

export const SignInBttn=styled.button`
    width: 9rem;
    height: 3rem;
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 3px;
    text-align: center;
    padding: 5px;
    margin: 5px;
    font-size: 16px;
&:hover{

    border: 1px solid black;
    transition: 0.3;
    color:black;
}
`

export const IconSpan=styled.span`
    width: 380px;
    background-color: white;
    color: grey;
    align-items: center;
    justify-content: center;
    display: flex
`
export const Anchorr=styled.a`
    background-color: white;
    width: 380px;
    color: dodgerblue;
    cursor: pointer;
    text-align: center;
    align-items: center;
`