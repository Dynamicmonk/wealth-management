import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    msg:"",
    user:"",
    token:"",
    error:"",
    loading:false
}

export const signIn = createAsyncThunk('signin/API', async()=>{
    try{

    
    const apiResponse= await axios.post('https://dmwealthmanagement.azurewebsites.net/Help/Api/POST-api-UserSignUp').then(res=>{
    console.log((res));
    return res;})
    .catch(err=>console.log(err));
    return apiResponse;}
    
    catch (err) {
         if (!err.response) {
             throw err
         }}
    })


// export const signIn = createAsyncThunk('signin/API', async(body)=>{
//    const result = await fetch('https://prod-08.centralindia.logic.azure.com:443/workflows/f38d19a35be44d76b272252594ceeffa/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=UOmOaOcc9kiqYDsx8hIBjKaspOYoqsYPCMz1sJOR6os', body)
//    return result;
// })
//    {
//       method: 'post',
//     headers: { 
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(body)
//     })})

    // export const fetch2 = async(body, api, token='')=>{
    //     const res = await fetch(api, {
    //   method: 'post',
    // headers: { 
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(body)
    // })
    // return await res.json()
    // }
    
    
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



const AuthSlice= createSlice({
    initialState,
    name:'authuser',
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(signIn.pending,(state,action)=>{
            state.loading=true
        });
        builder.addCase(signIn.rejected,(state,action)=>{
            state.loading=true;
            // state.user= action.payload;
        });
        builder.addCase(signIn.fulfilled,(state,action)=>{
            state.loading=false;
            if(action.payload.error){
                state.error= action.payload.error
            }
            // else{
            //     state.msg=msg
            // }
        });
    //   builder.addCase(fetchallusers.pending, (state, action)=>{
    // state.loading='pending';
    // });
    // builder.addCase(fetchallusers.fulfilled, (state, action)=>{
    //     state.loading='idle';
    //     state.usersData=action.payload;
    // });
    // builder.addCase(fetchallusers.rejected, (state,action)=>{
    //     state.loading='rejected'
    // });  
    }

})

export const {userLoading , userFailed , userRejected} = AuthSlice.actions;
// export const getUser=(state)=>state.authusers.user;
// export const  getUserLoading= (state)=>state.authusers.loading;



// const initialState = {
//     isLoading: false,
//     isAuth:false,
//     error:''
// }

// export const AuthSlice = createSlice({
//     name:'authuser',
//     initialState,
//     reducers:{
//         loginPending:(state)=>{
//             state.isLoading= true
//         },
//         loginFail:(state, {payload})=>{
//             state.isLoading=false;
//             state.error=payload;
//         },
//         loginSuccess:(state)=>{
//             state.isAuth=true;
//             state.isLoading=false;
//             state.error=''

//         }
//     }
// })

// export const {reducer , actions}=AuthSlice;
export const {loginFail , loginPending , loginSuccess}= AuthSlice.actions;
export const getUser=(state)=>state.authuser.user;
export const getuserloading=(state)=>state.authuser.loading;
export default AuthSlice.reducer;