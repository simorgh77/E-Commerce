import { createSlice } from "@reduxjs/toolkit";
import { CreateSliceOptions,SliceCaseReducers }
 from "@reduxjs/toolkit";
// interface Iinit{
//     id: String,
//     name: String,
//     price: String,
//     image: String,
//     colors: [
//     ],
//     company: String,
//     description: String,
//     category: String, 
// }
const initialstate={
    products:[

    ]
}
export const ProductsReducer=createSlice({
name:"ProductsReducer",
    init:initialstate,
    reducers:{
addproducts:(state,action)=>{

    state.products.push(action.payload)
        }
    }
})
export const {addproducts}=ProductsReducer.actions
export default ProductsReducer.reducer