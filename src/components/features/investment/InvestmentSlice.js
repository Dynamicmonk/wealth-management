import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const createNewMemberInvestmentApi= createAsyncThunk('adduserInvestment/addAPI', async(payload)=>{
const apiResponse = await axios.post(`https://dmwealthmanagement.azurewebsites.net/api/Investments/UserInvestments`,payload).then(res=>{
    console.log("investment post api invoked")
    return res}).catch(err=>console.log(err));

return apiResponse;
// .MembersResults.contacts;
})

// export const updateMemberApi= createAsyncThunk('updateuser/updateAPI', async(payload)=>{
//     const apiResponse= await axios.put(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp?contactid= c9b5f1a8-fe3a-ed11-9db0-6045bdad1ab7/${payload.id}`).then(res=>{
//         debugger;
//     return res.data.MemberResults.contacts}).catch(err=>{
//         console.log(err)});
//     return apiResponse;
//     // .MembersResults.contacts;
// })

export const fetchainvest= createAsyncThunk('users/getAPI' , async(payload)=>{
    // try{
        let origResponse = 
        //const apiResponse= 
        await axios.get(`https://dmwealthmanagement.azurewebsites.net/api/Investments/GetInvestmentById?investmentid=${payload.id}`)
        .then(res=>{
            // debugger;
            console.log(res)
            return res.data.InvestmentResult.investments;
        })
        .catch(err=> {
            console.log(err)
        })
            // return apiResponse.json()
            // const apiResponse= await axios.get('http://localhost:4000/users');
            // return apiResponse.data; 
        return origResponse
    // }
    // catch (err) {
    //     if (!err.response) {
    //         throw err
    //     }}
    });

const initialState={
    investData:[],
    loading:'idle'
}
 export const InvestmentSlice = createSlice({
name:'invest',
initialState,
reducers:{
// allusersloading:(state)=>{
//     state.loading='pending';
// },
// allusersreceived:(state, {payload})=>{
//     state.loading='idle';
//     state.investData= payload
// }
},
extraReducers:(builder)=>{
builder.addCase(fetchainvest.pending, (state, action)=>{
    state.loading='pending';
    });
    builder.addCase(fetchainvest.fulfilled, (state, action)=>{
        state.loading='idle';
        state.investData=action.payload;
    });
    builder.addCase(fetchainvest.rejected, (state,action)=>{
        state.loading='rejected'
    });

    builder.addCase(createNewMemberInvestmentApi.pending, (state,action)=>{
       state.loading='pending' 
    });
    builder.addCase(createNewMemberInvestmentApi.rejected, (state,action)=>{
        state.loading='rejected'
    });
    builder.addCase(createNewMemberInvestmentApi.fulfilled, (state, action)=>{
        state.loading='idle';
        state.investData.unshift(action.payload);
    });
//     builder.addCase(updateMemberApi.pending, (state, action)=>{
//         state.loading='pending';
//     });
//     builder.addCase(updateMemberApi.fulfilled, (state, action)=>{
//         state.loading='idle';
//         state.investData = state.investData.filter((_)=>_.id !==action.payload.id);
//         state.investData.unshift(action.payload);
//     });
// builder.addCase(updateMemberApi.rejected, (state,action)=>{
//         state.loading='rejected'
//     });

}
})

export const {allinvestloading , allinvestreceived} = InvestmentSlice.actions;
export const getinvest=(state)=>state.invest.investData;
// export const fetchalluserss=(state)=>state.users.investData;
export const getallloading=(state)=>state.invest.loading;
export const getInvestByID=(id)=>{
    // debugger;
    return (state)=>state.invest.investData.filter((_)=> _.id==id)[0]
}
export default InvestmentSlice.reducer;