import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./reducers/basket.reducer/basket.reducer"
const store=configureStore ({

reducer:{
    BasketReducer:basketReducer,
}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store