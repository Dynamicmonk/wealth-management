import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();



const initialState={
    token:'',
    loading: false,
    error:'',
    user:[],
    msg:''
}

// export const signUp= createAsyncThunk('signup/API', async(body)=>{
//     debugger;
//         const result = await axios.post("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin", {
//     method:'Post',
//     headers:{
//         'Content-Type': "application/json"
//         // "Accept:"application/json"
//     },
//     body: JSON.stringify(body),
// }).then(res=>{
//     // console.log("hello ......")
//     // console.log(res.status)
//     console.log(res)
//     // console.log(body.json())
//     return (res);
// }).catch(err=>console.log(err))

//     return JSON.parse(result);

// });

//*******************fetch sign up*********** */

const fetct2 = async(api , body, token="" )=>{
    const res = await fetch(api , {
        method : "post",
        headers :{
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(body)
    })
return await res.json() 
}

export const signUp = createAsyncThunk('signup/api',async(body)=> {
    const result = await fetct2("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin", body)
    console.log(result);
    // history.push('/pc/sm/dashboard')
    console.log(result.RequestId)
    // return result;
    // if(result===null)
    // {
    //     alert("Sorry an error has occured plz try later")
    // }
    // else{
    //     history.push('pc/sm/dashboard')
    // }
    // let token = result.RequestId;
    // console.log(token)
    return result;
})





// export const signUp = function signupTest(){ 
//     let myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     let raw = JSON.stringify({
//         "Email": "5",
//         "Phone1": "5",
//         "Password": "5",
//         "IsNewSignup": false
//     });

//     let requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw
//     };

//     fetch("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin", requestOptions)
//     .then(response => response.text())
//     .then(result => {console.log(result); return result;})
//     .catch(error => {console.log('error', error); return error});
// }

// *********************************//

// export const signIn= createAsyncThunk('signIn/API', async(body)=>{
// const result = axios.post("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/UserSignIn", {
//     method:'post',
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body)
// });
// // console.log(result);
// return await result
// })


// **************Reducer*********************///////

export const authSignupReducer= createSlice({
    name:'authuser',
    initialState,
    reducer:{
        // addToken:(state, action)=>{
        //     state.token=localStorage.getItem('Token')
        // },
        // addUser:(state, action)=>{
        //     state.user=localStorage.getItem('UserName')
        // },
        // logout:(state, action)=>{
        //     state.token = null;
        //     localStorage.clear()
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(signUp.pending, (state, action)=>{
            state.loading= true
            });
            builder.addCase(signUp.fulfilled, (state, action)=>{
                state.loading=false;
                if(action.payload.error){
                    state.error = action.payload.error
                }
                else{
                    state.msg = action.payload.message;
                    // state.token = action.payload.token;
                    // state.user = action.payload.user;
            // debugger;
                    // localStorage.setItem('Token', JSON.stringify(token));
                    // localStorage.setItem('UserName', JSON.stringify(user));
                }
            });
            builder.addCase(signUp.rejected, (state,action)=>{
                state.loading= false
            });
        }
    // {
        // *****************SignUP***********************//
        // [signUp.pending]:(state)=>{
        //     state.loading= true
        // },
        // [signUp.rejected]:(state, action)=>{
        //     state.loading= false;
        //     state.error = action.error
        // },
        // [signUp.fulfilled]:(state , action)=>{
        //     state.loading = false;
            // state.user = action.payload;
            // state.token = token;
            // state.user = user;
            // debugger;
            // localStorage.setItem('Token', JSON.stringify(token));
            // localStorage.setItem('UserName', JSON.stringify(user));

            // state.msg = msg;
            // state.token = token;
            // state.user = user
            // state.msg = msg;
            // if(action.payload.error){
            //     state.error= action.payload.error;
            // };
            
        // }
        
        // *****************SIGNIN*****************//
        // [signIn.pending]:(state)=>{
        //     state.loading= true
        // },
        // [signIn.fulfilled]:(state , {payload:{error, msg, user, token}})=>{
        //     state.loading = false;
        //     if(error){
        //         state.error=error;
        //     }
        //     else{
        //         state.msg = msg;
        //         state.user = user;
        //         state.token = token;
                
        //         localStorage.setItem('Token : ', token)
        //         localStorage.setItem('Message : ', msg)
        //         localStorage.setItem('UserName : ', user)
        //     }

        //     // if(action.payload.error){
            //     state.error= action.payload.error;
            // }
        // },

        //*************************//

        // addToken:(state, action)=>{
        //     state.token=localStorage.getItem('Token')
        // },
        // addUser:(state, action)=>{
        //     state.user=localStorage.getItem('UserName')
        // },
        // logout:(state, action)=>{
        //     state.token = null;
        //     localStorage.clear()
        // }

    // }
})
// export const {addToken, addUser , logout}= authSignupReducer.actions;
export const{allloading , userdetails}= authSignupReducer.actions
// export const { user } =(state)=>state.authuser.user
// export const { loading } =(state)=>state.authuser.loading;
// export const { error } =(state)=>state.authuser.error;
export default authSignupReducer.reducer;