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

            state=action.payload
         
        },
        Logout_user:(state,action)=>{
            state=initialState
        },
    }
})
export const {Login_user,Logout_user}= authReducer.actions 

export default authReducer.reducer