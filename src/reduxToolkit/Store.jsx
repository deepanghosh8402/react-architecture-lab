import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import productReducer from './productSlice'

export const Store=configureStore({
    reducer:{
        counter:counterReducer,
        products:productReducer
    }    
})
