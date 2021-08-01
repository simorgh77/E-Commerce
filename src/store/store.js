import { configureStore } from "@reduxjs/toolkit"

import ProductsReducer from "./reducer/Products.reducer/Products.reducer"

const store=configureStore ({

reducer:{
    ProductsReducer:ProductsReducer,
}
})

export default store