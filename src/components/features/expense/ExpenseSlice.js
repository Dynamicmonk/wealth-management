import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const createNewMemberExpenseApi= createAsyncThunk('adduserExpense/addAPI', async(payload)=>{
const apiResponse = await axios.post(`https://dmwealthmanagement.azurewebsites.net/api/Expense/UserExpense`,payload).then(res=>{
    console.log("Post expense api invoked")
    return res}).catch(err=>console.log(err));

return apiResponse;
// .MembersResults.contacts;
})

export const updateMemberApi= createAsyncThunk('updateuser/updateAPI', async(payload)=>{
    const apiResponse= await axios.put(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp?contactid= c9b5f1a8-fe3a-ed11-9db0-6045bdad1ab7/${payload.id}`).then(res=>{
        debugger;
    return res.data.MemberResults.contacts}).catch(err=>{
        console.log(err)});
    return apiResponse;
    // .MembersResults.contacts;
})

export const fetchallUserExpense= createAsyncThunk('users/getAPI' , async()=>{
    // try{
        let origResponse = 
        //const apiResponse= 
        await axios.get('https://dmwealthmanagement.azurewebsites.net/api/Expense/GetExpensetById?expenseId=29170ba3-053f-ed11-bba2-6045bdad1ab7')
        .then(res=>{
            // debugger;
            console.log(res.data.ExpenseResult.expenses)
            console.log('hellooo....')
            // origResponse = res.data.MemberResults.contacts
            return res.data.ExpenseResult.expenses;
        })
        .catch(err=> {
            console.log(err)
        })
            // return apiResponse;
            // const apiResponse= await axios.get('http://localhost:4000/users');
            // return apiResponse.data; 
        return origResponse;
    // }
    // catch (err) {
    //     if (!err.response) {
    //         throw err
    //     }}
    });

const initialState={
    expenseData:[],
    loading:'idle'
}
const ExpenseSlice = createSlice({
name:'userExpense',
initialState,
reducers:{
// allusersloading:(state)=>{
//     state.loading='pending';
// },
// allusersreceived:(state, {payload})=>{
//     state.loading='idle';
//     state.usersData= payload
// }
},
extraReducers:(builder)=>{
builder.addCase(fetchallUserExpense.pending, (state, action)=>{
    state.loading='pending';
    });
    builder.addCase(fetchallUserExpense.fulfilled, (state, action)=>{
        state.loading='idle';
        state.expenseData=action.payload;
    });
    builder.addCase(fetchallUserExpense.rejected, (state,action)=>{
        state.loading='rejected'
    });

    builder.addCase(createNewMemberExpenseApi.pending, (state,action)=>{
       state.loading='pending' 
    });
    builder.addCase(createNewMemberExpenseApi.rejected, (state,action)=>{
        state.loading='rejected'
    });
    builder.addCase(createNewMemberExpenseApi.fulfilled, (state, action)=>{
        state.loading='idle';
        state.expenseData.unshift(action.payload);
    });
    builder.addCase(updateMemberApi.pending, (state, action)=>{
        state.loading='pending';
    });
    builder.addCase(updateMemberApi.fulfilled, (state, action)=>{
        state.loading='idle';
        state.expenseData = state.expenseData.filter((_)=>_.id !==action.payload.id);
        // state.usersData.unshift(action.payload);
    });
builder.addCase(updateMemberApi.rejected, (state,action)=>{
        state.loading='rejected'
    });

}
})

export const {allexpenseloading , allexpensereceived} = ExpenseSlice.actions;
export const getallexpense=(state)=>state.expense.expenseData;
// export const fetchalluserss=(state)=>state.users.usersData;
export const getallloading=(state)=>state.expense.loading;
export const getExpenseByID=(id)=>{
    debugger;
    return (state)=>state.expense.expenseData.filter((_)=> _.id==id)[0]
}
export default ExpenseSlice.reducer;