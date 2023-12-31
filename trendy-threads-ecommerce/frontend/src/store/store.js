import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginReducer from "../slice/LoginSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    auth: loginReducer
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer   
})
   
let persistor = persistStore(store)
export default persistor;

