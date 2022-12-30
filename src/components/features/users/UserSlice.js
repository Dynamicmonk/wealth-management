import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



const initialState={
    usersData:[],
    loading:'idle',
    usersDataUser:[]
};



// export const createNewMemberApi= createAsyncThunk('adduser/addAPI', async(payload)=>{
// const apiResponse = await axios.post(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin`,payload).then(res=>{
//     console.log(res)
//     return res.data}).catch(err=>console.log(err.response.data));

// return apiResponse;

// })
//////////////////////////////////////////////////

export var userID;

export const createNewMemberApi = createAsyncThunk('adduser/Api', async(body)=>{
    const result = await fetch("https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/ValidateLogin", {
        method:'post',
    headers:{
        "Content-Type" : "application/json",
        // Authorization : localStorage.getItem('token')
    },
    body : JSON.stringify(body)

    }).then(response => response.json())
    .then((data) => {
      console.log(data)
      userID=data.RequestId;
      return data;
    });
      return result;
    })



/////////////////////////////////////

export const updateMemberApi= createAsyncThunk('updateuser/updateAPI', async(payload)=>{
    const apiResponse= await axios.patch(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/UpdateUser`,payload).then(res=>{
    console.log("update member api invoked");
    return res}).catch(err=>{
        console.log(err.response.error)});
    return apiResponse;
    // .MembersResults.contacts;
})

/*****************************DELETE API*********************************/ 
export const deleteMemberApi= createAsyncThunk('deleteuser/API', async(id)=>{

    const apiResponse= await axios.delete(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/DeleteUser?contactid=${id}`).then(res=>{
    console.log("delete member api invoked");
    return res;
        }).catch(err=>{
        console.log(err)});
    return apiResponse;
})


/*********************************FETCHALLUSERS********************************************************/
export const fetchallusers= createAsyncThunk('users/getUsersAPI' , async(payload)=>{
    
        let origResponse= await axios.get(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp?contactid=${payload.id}`)
        .then(res=>{
            
            console.log("fetch all users api invoked")
            // console.log(res.data.MemberResults.contacts)
            console.log(res)
            // origResponse = res.data.MemberResults.contacts
            return res;
        })
        .catch(err=> {
            console.log(err.response.error)
        })
        return origResponse.data.MemberResults.contacts;
    });


/*****************************************************************************************/ 
var userName;
export const fetchUserById= createAsyncThunk('userById/getAPI' , async(payload)=>{
     try{
        let origResponse =   await axios.post(`https://dmwealthmanagement.azurewebsites.net/api/UserSignUp/GetMembersOnly?contactid=${payload.id}`)
        .then(res=>{
            console.log("FetchUserById invoked ")
            console.log(res.data.MemberResults.contacts)
            console.log("above res is from FetchuserById")
            // userName= res.data.MemberResults.contacts.FirstName;
            // console.log("UserName : "+userName)
            
            return res
            // console.log(res.data.MemberResults)
            // origResponse = res.data.MemberResults.contacts
        })
        .catch(err=> {
            console.log(err.response.error)
        }) 
        
        return origResponse.data.MemberReslts.contacts;
     }
     catch (err) {
         if (!err.response) {
             throw err
         }}
    });


const UserSlice = createSlice({
name:'users',
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

    /**************Fetch ALL USERS*************/ 
builder.addCase(fetchallusers.pending, (state, action)=>{
    state.loading='pending';
    });
    builder.addCase(fetchallusers.fulfilled, (state, action)=>{
        state.loading='idle';
        state.usersData=action.payload;
    });
    builder.addCase(fetchallusers.rejected, (state,action)=>{
        state.loading='rejected'
    });

    /**************CREATE NEW USER*************/

    builder.addCase(createNewMemberApi.pending, (state,action)=>{
       state.loading='pending' 
    });
    builder.addCase(createNewMemberApi.rejected, (state,action)=>{
        state.loading='rejected'
    });
    builder.addCase(createNewMemberApi.fulfilled, (state, action)=>{
        state.loading='idle';
        state.usersData.unshift(action.payload);
    });


/**************UPDATE MEMBER USERS*************/

    builder.addCase(updateMemberApi.pending, (state, action)=>{
        state.loading='pending';
    });
    builder.addCase(updateMemberApi.fulfilled, (state, action)=>{
        state.loading='idle';
        // state.usersData = state.usersData.filter((_)=>_.id !==action.payload.id);
        state.usersData.unshift(action.payload);
    });
builder.addCase(updateMemberApi.rejected, (state,action)=>{
        state.loading='rejected'
    });
/**************DELETE USERS*************/

    builder.addCase(deleteMemberApi.pending, (state, action)=>{
        state.loading='pending';
    });
    builder.addCase(deleteMemberApi.fulfilled, (state, action)=>{
        state.loading='idle';
        state.usersData = state.usersData.filter((_)=>_.id !==action.payload);
        
    });
builder.addCase(deleteMemberApi.rejected, (state,action)=>{
        state.loading='rejected'
    });

/**************Fetch USER BY ID*************/


    builder.addCase(fetchUserById.pending, (state, action)=>{
        state.loading='pending';
        });
        builder.addCase(fetchUserById.fulfilled, (state, action)=>{
            state.loading='idle';
            state.usersDataUser=action.payload;
            
        });
        builder.addCase(fetchUserById.rejected, (state,action)=>{
            state.loading='rejected'
        });

}
})

export const {allusersloading , allusersreceived} = UserSlice.actions;
export const getallusers=(state)=>state.users.usersData;
// export const fetchalluserss=(state)=>state.users.usersData;
export const userByid =(state)=>state.users.usersDataUser;
export const getallloading=(state)=>state.users.loading;
export const getUserByID=(id)=>{
    debugger;
    return (state)=>state.users.usersData.filter((_)=> _.id==id)[0]
}
export default UserSlice.reducer;