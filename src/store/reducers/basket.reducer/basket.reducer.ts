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
        gender:string,
        number:number
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
          const product=state.products.find(item=>item.id
            ===action.payload.id)

              product? product.number++:state.products.push(action.payload)
        },
        Deletefrombasket:(state,action:PayloadAction<string>)=>{
        state.products=state.products.filter(item=>item.id !== action.payload)
        } ,
        Decreasebasket:(state,action:PayloadAction<string>)=>{
            const product=state.products.find(item=>item.id
                ===action.payload)

                product&& product.number--

                if(product?.number===0){
                state.products=state.products.filter(item=>item.id !== action.payload)
                }
        }
    }
})

export const {AddTobasket,Deletefrombasket,Decreasebasket} = BasketReducer.actions
export default BasketReducer.reducer
