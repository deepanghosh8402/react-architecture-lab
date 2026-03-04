import React, { Component, useContext } from 'react'
import './Label.css'
import { MyContext } from './List';
export default function Label(props) {  
  const style = props.isActive ? { background: 'green' } : { background: 'orange' }
   const value = useContext(MyContext)
  if (value === false)
    return
  return (
    <span 
    className="list-label-item" 
    style={style} onClick={() => { props.onLabelChange(props.isActive ? 'active' : 'non-active') }}> 
     {props.isActive ? 'Active' : 'Not Active'}
     </span>

  )
}

