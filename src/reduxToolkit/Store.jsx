import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import ramdaProductsReducer from './ramdaProductSlice'

export const Store=configureStore({
    reducer:{
        counter:counterReducer,
        products:productReducer,
        ramdaProducts:ramdaProductsReducer
    }    
})
