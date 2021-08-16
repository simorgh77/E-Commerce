import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import {login} from './auth.api'
interface Iuser{
    UserName:string,
    Password:string,
    Token:string,
    RefreshToken:string,
    Is_login:boolean
    pending:boolean
    error:{}
}

const initialState:Iuser={
        UserName:'',
        Password:'',
        Token:'',
        RefreshToken:'',
        Is_login:false,
        pending:false,
        error:{error:'s'}
}

export const loginUser=createAsyncThunk(
'authReducer/loginUser',
async(payload:{UserName:string,Password:string})=>{
    try{
        const data=await login(payload.UserName,payload.Password)
        console.log(data);
        
        return data
    }catch(error)
    {
throw(error)
    }
}
)

const authReducer= createSlice({
    name:"authReducer",
    initialState,
    reducers:{
        Logout_user:(state)=>{
            state.Is_login=false
            state.Password=''
            state.UserName=''
            state.Token=''
            state.RefreshToken=''
        },
    },
        extraReducers:(builder)=>{
            builder.addCase(loginUser.pending,(state:any)=>{
              
            }),
            builder.addCase(loginUser.fulfilled,(state: any,action:any)=>{
                state.Is_login=true
                state.Password=action.payload.Password
                state.UserName=action.payload.UserName
                state.pending=false
            }),
            builder.addCase(loginUser.rejected,(state:any,action:any)=>{
                state.pending=false
                state.error=action.payload.error
                
            })
        }

    
})
export const {Logout_user}= authReducer.actions 

export default authReducer.reducer