import React from 'react'
import CounterReducer from '../components/ReducerCounter'
import FormReducer from '../components/ReducerForm'

export default function Reducer() {
  return (
    <div>
    <div><CounterReducer/></div>
    <div><FormReducer/></div>
    </div>
  )
}
