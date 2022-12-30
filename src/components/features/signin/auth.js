import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom";


export const history = createBrowserHistory();

const initialState = {
  user: [],
  token: "",
  error: "",
  isLoading: false,
};

//********************sign IN ********************************/
const location = {
  pathname: '/pc/sm/dashboard',
  state: { fromHome: true }
}

export const signin = createAsyncThunk("SignIn/API", async (body)=>{
    let res = fetch("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin", {
        method:'post',
    headers:{
        "Content-Type" : "application/json",
        // Authorization : localStorage.getItem('token')
    },
    body : JSON.stringify(body)

    }).then(response => response.json())
      .then((data) => {
        console.log("hellooooo")
        console.log(data)
        ReqstId = data.RequestId
      });
      
      console.log(ReqstId)
      return res;
    // return await res.json();
    
})
export var ReqstId;


const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // addToken: (state) => {
    //   state.token = localStorage.getItem("token");
    // },
    // addUser: (state) => {
    //   state.user = localStorage.getItem("user");
    // },
  },
  extraReducers: {
    [signin.pending]:(state , action)=>{
        state.isLoading = true;
    },

    [signin.fulfilled]: (state , action)=>{
        state.isLoading = false;
        state.user= action.payload
        // state.token = token;
        // state.user = user;
        // localStorage.setItem('user', JSON.stringify(user));
        // localStorage.setItem('token', JSON.stringify(token));

    }
  }
})
//   (builder) => {
//     builder.addCase(signin.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(signin.fulfilled, {payload : {user , token}} => {
//       state.isLoading = false;
//       if (action.payload.error) {
//         state.error = action.payload.error;
//       } else {
//         state.msg = action.payload.message;
//         state.token = action.payload.token;
//         state.user = action.payload.user;
//         debugger;
//         localStorage.setItem('token', JSON.stringify(token));
//         localStorage.setItem('user', JSON.stringify(user));
//       }
//     });
//     builder.addCase(signin.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//   }
// });

//***************************************** */

// [signin.pending]:(state, action)=>{
//     state.isLoading = true;

// },
// [signin.rejected]:(state, action)=>{
//     state.isLoading = false;
//     // state.error = action.payload.error;

// },
// [signin.fulfilled]:(state, action)=>{
// state.token = token;
// state.user = user;
// debugger;
// localStorage.setItem('token', JSON.stringify(token));
// localStorage.setItem('user', JSON.stringify(user));
//             state.loading = false;
//             if(action.payload.error){
//                 state.error = action.payload.error
//             }
//             else{
//                 state.msg = action.payload.message;
//         }

//         }
//     }
// })

// export const { addToken, addUser } = auth.actions;
export const getuser = (state) => state.auth.user;
export const getallloadinguser=(state)=>state.users.isLoading;
export default auth.reducer;
