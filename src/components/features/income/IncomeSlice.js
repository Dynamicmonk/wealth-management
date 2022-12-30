import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { userID } from "../users/UserSlice";


var userid = userID;
export const createNewIncomeAPI= createAsyncThunk('adduserIncome/addAPI', async(payload)=>{
const apiResponse = await axios.post(`https://dmwealthmanagement.azurewebsites.net/api/Income/UserIncome`,payload).then(res=>{
console.log(res.data);
console.log("Post income invoked")
return res.data;
}).catch(err=>console.log(err));

return apiResponse;
})

export const updateIncomeAPI= createAsyncThunk('updateuser/updateAPI', async(payload)=>{
    const apiResponse= await axios.put(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp?contactid= c9b5f1a8-fe3a-ed11-9db0-6045bdad1ab7/${payload.id}`).then(res=>{
    return res.data}).catch(err=>{
        console.log(err)});
    return apiResponse;
})

export const fetchMemberIncome= createAsyncThunk('usersIncome/getAPI' , async(payload)=>{
        let origResponse = await axios.get(`https://dmwealthmanagement.azurewebsites.net/api/Income/GetIncomeUsingId?requestid=${payload.id}`)
    
        .then(res=>{
            // console.log("Hellooo...................");
            // console.log(res.data.IncomeResult.incomes)
            return res.data.IncomeResult.incomes
        })
        .catch(err=> {
            console.log(err.response.error)
        })
        return origResponse;
    });

const initialState={
    incomeData:[],
    loading:'idle'
}
const IncomeSlice = createSlice({
name:'income',
initialState,
reducers:{

},
extraReducers:(builder)=>{
builder.addCase(fetchMemberIncome.pending, (state, action)=>{
    state.loading='pending';
    });
    builder.addCase(fetchMemberIncome.fulfilled, (state, action)=>{
        state.loading='idle';
        state.incomeData=action.payload;
    });
    builder.addCase(fetchMemberIncome.rejected, (state,action)=>{
        state.loading='rejected'
    });

    builder.addCase(createNewIncomeAPI.pending, (state,action)=>{
       state.loading='pending' 
    });
    builder.addCase(createNewIncomeAPI.rejected, (state,action)=>{
        state.loading='rejected'
    });
    builder.addCase(createNewIncomeAPI.fulfilled, (state, action)=>{
        state.loading='idle';
        state.incomeData.unshift(action.payload);
    });
    builder.addCase(updateIncomeAPI.pending, (state, action)=>{
        state.loading='pending';
    });
    builder.addCase(updateIncomeAPI.fulfilled, (state, action)=>{
        state.loading='idle';
        state.incomeData = state.incomeData.filter((_)=>_.id !==action.payload.id);
        state.incomeData.unshift(action.payload);
    });
builder.addCase(updateIncomeAPI.rejected, (state,action)=>{
        state.loading='rejected'
    });

}
})

export const {allincomeloading , allincomereceived} = IncomeSlice.actions;
export const getallincome=(state)=>state.income.incomeData;
export const getallloading=(state)=>state.income.loading;
export const getIncomeByID=(id)=>{
    // debugger;
    return (state)=>state.income.incomeData.filter((_)=> _.id==id)[0]
}
export default IncomeSlice.reducer;