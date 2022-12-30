import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { error } from "console";
// import { error } from "console";


const initialState={
    user:'',
    token:'',
    err:'',
    msg:'',
    loading:false
}

export const logup = createAsyncThunk('logIn/API', async(body)=>{
    const result = axios.post("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/UserSignUp", {
        method:'post',
        headers:{
            "Content-Type":'application/json'
        },
        body: JSON.stringify(body)
    });
    return await result
})

export const logupReducer= createSlice({
    name:'logup',
    initialState,
    reducers:{
        addToken:(state, action)=>{
            state.token=localStorage.getItem('Token')
        },
        addUser:(state, action)=>{
            state.user=localStorage.getItem('UserName')
        },
        logout:(state, action)=>{
            state.token = null;
            localStorage.clear()
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(logup.pending,(state , action)=>{
            state.loading= true;
            
        });

        builder.addCase(logup.fulfilled, (state, action)=>{
            state.loading= false;
            state.user = action.payload;
        })

        

    }
})

export default logupReducer.reducer;