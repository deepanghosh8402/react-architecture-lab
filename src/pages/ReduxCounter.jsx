import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { increment } from '../reduxToolkit/CounterSlice'
import { increment, decrement, reset } from '../reduxToolkit/counterSlice'
import { SetHundred } from '../reduxToolkit/CounterAction'
export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>

            <h2>Redux Counter: {count}</h2>

            <button onClick={() => dispatch(increment())}>
                +
            </button>

            <button onClick={() => dispatch(decrement())}>
                -
            </button>

            <button onClick={() => dispatch(reset())}> 

                Reset
            </button>

            <button onClick={() => dispatch(SetHundred(100))}>
                LogOut
            </button>

        </div>
    )

}
