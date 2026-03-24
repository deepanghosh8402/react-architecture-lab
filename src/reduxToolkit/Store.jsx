import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'
import productReducer from './productSlice'
import ramdaProductsReducer from './ramdaProductSlice'
import userReducer from "../features/users/userSlice";
import rootSaga from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
export const Store=configureStore({
    reducer:{
        counter:counterReducer,
        products:productReducer,
        ramdaProducts:ramdaProductsReducer,
        users: userReducer
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)    //{ thunk: false }
})
sagaMiddleware.run(rootSaga);