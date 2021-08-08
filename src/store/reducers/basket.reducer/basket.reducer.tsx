import React from 'react'
import { createSlice ,PayloadAction} from '@reduxjs/toolkit'
interface Iproduct{
        id:string,
        name: string,
        price: string,
        image: string,
        company: string,
        isexist: string,
        category: string,
        rate:number,
        tag:string,
        gender:string
}
interface IBascket{
    products:Iproduct[]
}

const initialState:IBascket={
    products:[]
}

const BasketReducer= createSlice({

    name:'BasketReducer',
    initialState,
    reducers:{
        AddTobasket:(state,action:PayloadAction<Iproduct>)=>{
                state.products.push(action.payload)
        },
        Deletefrombasket:(state,action:PayloadAction<string>)=>{
        state.products=state.products.filter(item=>item.id !== action.payload)
        }    
    }
})

export const {AddTobasket,Deletefrombasket} = BasketReducer.actions
export default BasketReducer.reducer
