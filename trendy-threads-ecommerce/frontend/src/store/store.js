import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../slice/LoginSlice"

export const store = configureStore({
    reducer: {
        auth: loginReducer
    }
})
