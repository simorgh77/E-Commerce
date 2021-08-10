import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface Iuser{
    UserName:string,
    Password:string,
    Token:string,
    RefreshToken:string,
    Is_login:boolean
}

const initialState:Iuser={
        UserName:'',
        Password:'',
        Token:'',
        RefreshToken:'',
        Is_login:false
}
const authReducer= createSlice({
    name:"authReducer",
    initialState,
    reducers:{

        Login_user:(state,action:PayloadAction<Iuser>)=>{

            state.Is_login=true
            state.Password=action.payload.Password
            state.UserName=action.payload.UserName
            state.Token=action.payload.Token
            state.RefreshToken=action.payload.RefreshToken
         
        },
        Logout_user:(state,action)=>{
            state.Is_login=false
            state.Password=''
            state.UserName=''
            state.Token=''
            state.RefreshToken=''
        },
    }
})
export const {Login_user,Logout_user}= authReducer.actions 

export default authReducer.reducer