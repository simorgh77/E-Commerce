import { combineReducers } from "redux";
import basketReducer from "./basket.reducer/basket.reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootReducer=combineReducers({
    BasketReducer:basketReducer,
})
const persistConfig = {
    key: 'products',
    storage,
  }

 export const persistedReducer = persistReducer(persistConfig, rootReducer)