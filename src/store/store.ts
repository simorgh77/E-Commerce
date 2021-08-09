import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./reducers/basket.reducer/basket.reducer"
import  {persistedReducer} from './reducers'
import { persistStore } from 'redux-persist'
 const store=configureStore ({

reducer:{
      persistedReducer,
}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
  export const persistor = persistStore(store)
 
 